import posthog from "posthog-js";

import { InsightsIdentity } from "./types";

export const initPosthog = (apiKey: string, apiHost: string) => {
  posthog.init(apiKey, {
    api_host: apiHost,
    capture_pageview: false,
  });
};

export const enableDebugMode = () => {
  posthog.debug();
};

export const disableDebugMode = () => {
  posthog.debug(false);
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

  if (userId !== posthog.get_distinct_id()) {
    posthog.identify(userId, { email, name });
  }

  // Associate all events in this session with this account
  if (accountId) {
    posthog.group("account", accountId);
  }

  // Associate all events in this session with this organisation (if available)
  if (organisationId) {
    posthog.group("organisation", organisationId);
  }
};

export const trackPageView = () => {
  posthog.capture("$pageview");
};

export const track = (event: string, properties?: Record<string, unknown>) => {
  posthog.capture(event, properties);
};

export const startSessionRecording = posthog.startSessionRecording;

export const stopSessionRecording = posthog.stopSessionRecording;
