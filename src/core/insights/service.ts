import type {
  AnalyticsService,
  InsightsConfig,
  InsightsIdentity,
  TrackPageViewOptions,
} from "./types";
import * as datalayer from "./datalayer";
import * as mixpanel from "./mixpanel";
import * as posthog from "./posthog";
import * as logger from "./logger";

// The real implementation that will be used after initialization
export class InsightsService implements AnalyticsService {
  private debugMode: boolean = false;

  initInsights({
    mixpanelToken,
    mixpanelAutoCapture,
    mixpanelRecordSessionsPercent = 1,
    posthogApiKey,
    posthogApiHost,
    debug = false,
  }: InsightsConfig): void {
    this.debugMode = !!debug;

    if (this.debugMode) {
      logger.debug("InsightService: Initializing insights");
    }

    try {
      mixpanel.initMixpanel(
        mixpanelToken,
        mixpanelAutoCapture,
        this.debugMode,
        mixpanelRecordSessionsPercent,
      );
    } catch (e) {
      if (this.debugMode) {
        logger.error("Failed to initialize Mixpanel", e);
      }
    }

    try {
      posthog.initPosthog(posthogApiKey, posthogApiHost);
    } catch (e) {
      if (this.debugMode) {
        logger.error("Failed to initialize Posthog", e);
      }
    }
  }

  enableDebugMode(): void {
    this.debugMode = true;
    logger.debug("Enabling debug mode");

    try {
      mixpanel.enableDebugMode();
      posthog.enableDebugMode();
    } catch (e) {
      logger.error("Failed to enable debug mode", e);
    }
  }

  disableDebugMode(): void {
    this.debugMode = false;
    logger.debug("Disabling debug mode");

    try {
      mixpanel.disableDebugMode();
      posthog.disableDebugMode();
    } catch (e) {
      logger.error("Failed to disable debug mode", e);
    }
  }

  identify(identity: InsightsIdentity): void {
    const { userId, accountId, organisationId, email, name } = identity;

    // In very rare cases we might have a user without an account, so we'll
    // let null/undefined/blank strings through on that one
    if (!userId) {
      if (this.debugMode) {
        logger.warn("User ID not provided, skipping identify");
      }
      return;
    }

    if (this.debugMode) {
      logger.info("Identifying user", {
        userId,
        accountId,
        organisationId,
        email,
        name,
      });
    }

    try {
      mixpanel.identify({ userId, accountId, organisationId, email, name });
    } catch (e) {
      if (this.debugMode) {
        logger.error("Failed to identify user in Mixpanel", e);
      }
    }

    try {
      posthog.identify({ userId, accountId, organisationId, email, name });
    } catch (e) {
      if (this.debugMode) {
        logger.error("Failed to identify user in Posthog", e);
      }
    }
  }

  trackPageView(options?: TrackPageViewOptions): void {
    if (this.debugMode) {
      logger.info("Tracking page view");
    }

    try {
      mixpanel.trackPageView();
    } catch (e) {
      if (this.debugMode) {
        logger.error("Failed to track page view in Mixpanel", e);
      }
    }

    try {
      posthog.trackPageView();
    } catch (e) {
      if (this.debugMode) {
        logger.error("Failed to track page view in Posthog", e);
      }
    }

    if (options?.includeDataLayer) {
      try {
        datalayer.trackPageView();
      } catch (e) {
        if (this.debugMode) {
          logger.error("Failed to track page view in GTM", e);
        }
      }
    }
  }

  track(event: string, properties?: Record<string, unknown>): void {
    if (this.debugMode) {
      logger.info("Tracking event", { event, properties });
    }

    try {
      mixpanel.track(event, properties);
    } catch (e) {
      if (this.debugMode) {
        logger.error("Failed to track event in Mixpanel", e);
      }
    }

    try {
      posthog.track(event, properties);
    } catch (e) {
      if (this.debugMode) {
        logger.error("Failed to track event in Posthog", e);
      }
    }

    try {
      datalayer.track(event, properties);
    } catch (e) {
      if (this.debugMode) {
        logger.error("Failed to track event in Datalayer", e);
      }
    }
  }

  startSessionRecording(): void {
    if (this.debugMode) {
      logger.info("Starting session recording");
    }

    try {
      mixpanel.startSessionRecording();
    } catch (e) {
      if (this.debugMode) {
        logger.error("Failed to start session recording in Mixpanel", e);
      }
    }

    try {
      posthog.startSessionRecording();
    } catch (e) {
      if (this.debugMode) {
        logger.error("Failed to start session recording in Posthog", e);
      }
    }
  }

  stopSessionRecording(): void {
    if (this.debugMode) {
      logger.info("Stopping session recording");
    }

    try {
      mixpanel.stopSessionRecording();
    } catch (e) {
      if (this.debugMode) {
        logger.error("Failed to stop session recording in Mixpanel", e);
      }
    }

    try {
      posthog.stopSessionRecording();
    } catch (e) {
      if (this.debugMode) {
        logger.error("Failed to stop session recording in Posthog", e);
      }
    }
  }

  setupObserver(): () => void {
    // Helper to get all data-insight-* attributes from an element
    const getInsightAttributes = (
      element,
    ): { event?: string; [key: string]: string | undefined } => {
      // limit how many data attributes we'll process
      const MAX_ATTRIBUTES = 10;
      let count = 0;

      const attributes: { event?: string; [key: string]: string | undefined } =
        {};

      for (const attr of element.attributes) {
        if (count >= MAX_ATTRIBUTES) break;
        if (attr.name.startsWith("data-insight-")) {
          // Validate attribute name format
          if (!/^data-insight-[a-zA-Z0-9-]+$/.test(attr.name)) continue;

          // Sanitize attribute value
          if (typeof attr.value !== "string" || attr.value.length > 100)
            continue;

          // Convert data-insight-event-name to eventName
          const key = attr.name
            .replace("data-insight-", "")
            .split("-")
            .map((part, index) =>
              index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1),
            )
            .join("");
          attributes[key] = attr.value;
          count++;
        }
      }
      return attributes;
    };

    // Helper to find closest element with data-insight attributes
    const findClosestElementWithInsights = (element) => {
      let current = element;
      while (current && current !== document.body) {
        const insights = getInsightAttributes(current);
        if (Object.keys(insights).length > 0) {
          return insights;
        }
        current = current.parentElement;
      }
      return null;
    };

    // Global click handler
    const handleClick = (event: MouseEvent): void => {
      if (!(event.target instanceof HTMLElement)) return;
      const insights = findClosestElementWithInsights(event.target);
      if (insights) {
        // Extract special properties if they exist
        const { event: eventName, ...properties } = insights;
        this.track(eventName || "element_clicked", properties);
      }
    };

    // Add listener to document body to catch all clicks
    document.body.addEventListener("click", handleClick);

    // Return cleanup function in case it's needed
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }
}
