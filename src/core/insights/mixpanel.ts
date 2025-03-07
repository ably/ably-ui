import mixpanel from "mixpanel-browser";

import { InsightsIdentity } from "./types";

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
        }
      : false,
    track_pageview: false, // We'll track page views manually
    record_sessions_percent: recordSessionsPercent,
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
}: InsightsIdentity) => {
  // In very rare cases we might have a user without an account, so we'll
  // let null/undefined/blank strings through on that one
  if (!userId) {
    return;
  }

  mixpanel.identify(userId.toString());

  if (email || name) {
    mixpanel.people.set({ $email: email, $name: name });
  }

  if (accountId) {
    mixpanel.people.union({ accounts: [accountId.toString()] });
  }

  if (organisationId) {
    mixpanel.people.set({ organization_id: [organisationId.toString()] });
  }
};

export const trackPageView = mixpanel.track_pageview;

export const track = mixpanel.track;

export const startSessionRecording = mixpanel.start_session_recording;

export const stopSessionRecording = mixpanel.stop_session_recording;
