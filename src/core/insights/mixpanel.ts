import mixpanel from "mixpanel-browser";

export const initMixpanel = (
  token: string,
  autoCapture: boolean = false,
  debug: boolean = false,
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
  });
};

export const enableDebugMode = () => {
  mixpanel.set_config({ debug: true });
};

export const disableDebugMode = () => {
  mixpanel.set_config({ debug: false });
};

export const identify = (
  userId: string,
  accountId: string,
  organisationId?: string,
  email?: string,
  name?: string,
) => {
  mixpanel.identify(userId);
  mixpanel.people.set({ $email: email, $name: name });

  mixpanel.people.union({ account_id: [accountId] });

  if (organisationId) {
    mixpanel.people.set({ organisation_id: [organisationId] });
  }
};

export const trackPageView = () => {
  mixpanel.track_pageview();
};

export const track = (event: string, properties?: Record<string, unknown>) => {
  mixpanel.track(event, properties);
};
