import * as datalayer from "./datalayer";
import * as mixpanel from "./mixpanel";
import * as posthog from "./posthog";
import { InsightsIdentity } from "./types";
import * as logger from "./logger";

export type InsightsConfig = {
  debug: boolean;
  mixpanelToken: string;
  mixpanelAutoCapture: boolean;
  mixpanelRecordSessionsPercent: number;
  posthogApiKey: string;
  posthogApiHost: string;
};

let debugMode = false;

export const initInsights = ({
  mixpanelToken,
  mixpanelAutoCapture,
  mixpanelRecordSessionsPercent = 1,
  posthogApiKey,
  posthogApiHost,
  debug = false,
}: InsightsConfig) => {
  debugMode = !!debug;

  if (debugMode) {
    logger.debug("Initializing insights");
  }

  try {
    mixpanel.initMixpanel(
      mixpanelToken,
      mixpanelAutoCapture,
      debugMode,
      mixpanelRecordSessionsPercent,
    );
  } catch (e) {
    if (debugMode) {
      logger.error("Failed to initialize Mixpanel", e);
    }
  }

  try {
    posthog.initPosthog(posthogApiKey, posthogApiHost);
  } catch (e) {
    if (debugMode) {
      logger.error("Failed to initialize Posthog", e);
    }
  }

  try {
    datalayer.initDatalayer();
  } catch (e) {
    if (debugMode) {
      logger.error("Failed to initialize Datalayer", e);
    }
  }
};

export const enableDebugMode = () => {
  debugMode = true;
  logger.debug("Enabling debug mode");

  try {
    mixpanel.enableDebugMode();
    posthog.enableDebugMode();
  } catch (e) {
    logger.error("Failed to enable debug mode", e);
  }
};

export const disableDebugMode = () => {
  debugMode = false;
  logger.debug("Disabling debug mode");

  try {
    mixpanel.disableDebugMode();
    posthog.disableDebugMode();
  } catch (e) {
    logger.error("Failed to disable debug mode", e);
  }
};

export const identify = ({
  userId,
  accountId,
  organisationId,
  email,
  name,
}: InsightsIdentity) => {
  // In very rare cases we might have a user without an account, so we'll
  // let null/undefined/blank strings through on that one
  if (!userId) {
    if (debugMode) {
      logger.warn("User ID not provided, skipping identify");
    }
    return;
  }

  if (debugMode) {
    logger.info("Identifying user", { userId, accountId, organisationId, email, name });
  }

  try {
    mixpanel.identify({ userId, accountId, organisationId, email, name });
  } catch (e) {
    if (debugMode) {
      logger.error("Failed to identify user in Mixpanel", e);
    }
  }

  try {
    posthog.identify({ userId, accountId, organisationId, email, name });
  } catch (e) {
    if (debugMode) {
      logger.error("Failed to identify user in Posthog", e);
    }
  }
};

export const trackPageView = () => {
  if (debugMode) {
    logger.info("Tracking page view");
  }

  try {
    mixpanel.trackPageView();
  } catch (e) {
    if (debugMode) {
      logger.error("Failed to track page view in Mixpanel", e);
    }
  }

  try {
    posthog.trackPageView();
  } catch (e) {
    if (debugMode) {
      logger.error("Failed to track page view in Posthog", e);
    }
  }
};

export const track = (event: string, properties?: Record<string, unknown>) => {
  if (debugMode) {
    logger.info("Tracking event", { event, properties });
  }

  try {
    mixpanel.track(event, properties);
  } catch (e) {
    if (debugMode) {
      logger.error("Failed to track event in Mixpanel", e);
    }
  }

  try {
    posthog.track(event, properties);
  } catch (e) {
    if (debugMode) {
      logger.error("Failed to track event in Posthog", e);
    }
  }

  try {
    datalayer.track(event, properties);
  } catch (e) {
    if (debugMode) {
      logger.error("Failed to track event in Datalayer", e);
    }
  }
};

export const startSessionRecording = () => {
  if (debugMode) {
    logger.info("Starting session recording");
  }

  try {
    mixpanel.startSessionRecording();
  } catch (e) {
    if (debugMode) {
      logger.error("Failed to start session recording in Mixpanel", e);
    }
  }

  try {
    posthog.startSessionRecording();
  } catch (e) {
    if (debugMode) {
      logger.error("Failed to start session recording in Posthog", e);
    }
  }
};

export const stopSessionRecording = () => {
  if (debugMode) {
    logger.info("Stopping session recording");
  }

  try {
    mixpanel.stopSessionRecording();
  } catch (e) {
    if (debugMode) {
      logger.error("Failed to stop session recording in Mixpanel", e);
    }
  }

  try {
    posthog.stopSessionRecording();
  } catch (e) {
    if (debugMode) {
      logger.error("Failed to stop session recording in Posthog", e);
    }
  }
};

type InsightAttributes = {
  event?: string;
  [key: string]: string | undefined;
};

export const setupObserver = () => {
  // Helper to get all data-insight-* attributes from an element
  const getInsightAttributes = (element): InsightAttributes => {
    // limit how many data attributes we'll process
    const MAX_ATTRIBUTES = 10;
    let count = 0;

    const attributes: InsightAttributes = {};

    for (const attr of element.attributes) {
      if (count >= MAX_ATTRIBUTES) break;
      if (attr.name.startsWith("data-insight-")) {
        // Validate attribute name format
        if (!/^data-insight-[a-zA-Z0-9-]+$/.test(attr.name)) continue;

        // Sanitize attribute value
        if (typeof attr.value !== "string" || attr.value.length > 100) continue;

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
      track(eventName || "element_clicked", properties);
    }
  };

  // Add listener to document body to catch all clicks
  document.body.addEventListener("click", handleClick);

  // Return cleanup function in case it's needed
  return () => {
    document.body.removeEventListener("click", handleClick);
  };
};
