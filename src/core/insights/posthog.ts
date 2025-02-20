import posthog from "posthog-js";

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

export const identify = (
  userId: string,
  accountId: string,
  organisationId?: string,
  email?: string,
  name?: string,
) => {
  if (userId !== posthog.get_distinct_id()) {
    posthog.identify(userId, { email, name });
  }

  // Associate all events in this session with this account
  posthog.group("account", accountId);

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
