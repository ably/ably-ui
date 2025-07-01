import {
  InsightsConfig,
  InsightsIdentity,
  TrackPageViewOptions,
} from "./types";
import { InsightsCommandQueue } from "./command-queue";
export type { InsightsConfig };

// Hi and welcome 👋
//
// The insights code is written using a Command Queue, or Deferred Execution pattern.
// This pattern is useful when you need to queue up actions that should wait until
// some initialization is complete. In this case, we want to queue up all the analytics
// commands until the analytics service is initialized. This way, we can ensure that
// no analytics events are lost during the initialization process. It looks wildly
// different than other parts of Ably UI, but if you squint you realise it looks very
// much like the services it's wrapping.
//
// There are three pieces working together here:
// - The `AnalyticsService` interface, which defines the public methods that the insights
//   service will expose.
// - The `InsightsCommandQueue` class, which is the main entry point for the insights
//   service. It acts as a proxy that will either queue up commands or execute
//   them directly on the real implementation.
// - The `InsightsService` class, which is the real implementation that will be used
//   after initialization. It's responsible for initializing the underlying analytics
//   services (Mixpanel, Posthog & the data layer) and executing the queued commands.

// Create the singleton instance with the command queue pattern
const insights = new InsightsCommandQueue();

// Export the methods with the same interface as before
export const initInsights = (config: InsightsConfig) =>
  insights.initInsights(config);
export const enableDebugMode = () => insights.enableDebugMode();
export const disableDebugMode = () => insights.disableDebugMode();
export const identify = (identity: InsightsIdentity) =>
  insights.identify(identity);
export const trackPageView = (options?: TrackPageViewOptions) =>
  insights.trackPageView(options);
export const track = (event: string, properties?: Record<string, unknown>) =>
  insights.track(event, properties);
export const startSessionRecording = () => insights.startSessionRecording();
export const stopSessionRecording = () => insights.stopSessionRecording();
export const setupObserver = () => insights.setupObserver();
