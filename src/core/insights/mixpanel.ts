import mixpanel from "mixpanel-browser";

import { InsightsIdentity, TrackPageViewOptions } from "./types";

export const initMixpanel = (
  token: string,
  autoCapture: boolean = false,
  debug: boolean = false,
  recordSessionsPercent = 1,
) => {
  const blockSelectors = ["[ph-no-capture]", '[data-sl="mask"]'];
  if (!token) {
    console.warn("Mixpanel token not provided, skipping initialization");
    return;
  }

  mixpanel.init(token, {
    debug: debug,
    persistence: "localStorage",
    autocapture: autoCapture
      ? {
          block_selectors: blockSelectors,
          capture_text_content: true,
          pageview: false, // We'll track page views manually
        }
      : false,
    track_pageview: false, // We'll track page views manually
    record_sessions_percent: recordSessionsPercent,
    record_mask_text_selector: undefined, // Prevents all text from being masked - we have other masking configured/enabled
  });
};

export const enableDebugMode = () => {
  mixpanel.set_config({ debug: true });
};

export const disableDebugMode = () => {
  mixpanel.set_config({ debug: false });
};

export const identify = ({
  userId,
  accountId,
  organisationId,
  email,
  name,
  ...properties
}: InsightsIdentity) => {
  // In very rare cases we might have a user without an account, so we'll
  // let null/undefined/blank strings through on that one
  if (!userId) {
    return;
  }

  mixpanel.identify(userId.toString());

  const peopleProperties: Record<string, unknown> = { ...properties };

  if (email || name) {
    peopleProperties.$email = email;
    peopleProperties.$name = name;
  }

  if (organisationId) {
    peopleProperties.organization_id = [organisationId.toString()];
  }

  if (Object.keys(peopleProperties).length > 0) {
    mixpanel.people.set(peopleProperties);
  }

  if (accountId) {
    mixpanel.people.union({ accounts: [accountId.toString()] });
  }
};

// Simple function to replace all digits and IDs in a URL path with {redacted},
// purely to make reporting based on aggregates easier
const redactUrlSegments = (excludeIds: string[]) => {
  const pathSegments = window.location.pathname.split("/");

  const redactedSegments = pathSegments.map((segment) => {
    // Redact if the segment contains only digits or matches any of the excluded IDs
    if (
      /^\d+$/.test(segment) ||
      excludeIds.some((id) => id && id !== "" && segment === id)
    ) {
      return "{redacted}";
    }

    return segment;
  });

  // Join the segments back together
  const url = new URL(window.location.href);
  url.pathname = redactedSegments.join("/");

  return decodeURI(url.toString()).toLowerCase();
};

export const trackPageView = (properties?: TrackPageViewOptions) => {
  const { excludeIds, ...rest } = properties ?? {};

  // Add the redacted URL to the page view event for reporting
  mixpanel.track_pageview({
    redacted_path: redactUrlSegments(excludeIds ?? []),
    ...rest,
  });
};

export const track = (event: string, properties?: Record<string, unknown>) => {
  mixpanel.track(event, properties);
};

export const startSessionRecording = () => {
  mixpanel.start_session_recording();
};

export const stopSessionRecording = () => {
  mixpanel.stop_session_recording();
};
