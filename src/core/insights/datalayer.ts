declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export const track = (event: string, properties?: Record<string, unknown>) => {
  if (typeof window === "undefined") {
    return;
  }

  const dataLayer = window.dataLayer || [];
  window.dataLayer = dataLayer;

  window.dataLayer.push({
    event,
    ...properties,
  });
};

export const trackPageView = (properties?: Record<string, unknown>) => {
  track("client-side-route-change", properties);
};
