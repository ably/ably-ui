export type InsightsConfig = {
  debug: boolean;
  mixpanelToken: string;
  mixpanelAutoCapture: boolean;
  mixpanelRecordSessionsPercent: number;
  posthogApiKey: string;
  posthogApiHost: string;
};

// Define the interface for our analytics service
export interface AnalyticsService {
  initInsights: (config: InsightsConfig) => void;
  enableDebugMode: () => void;
  disableDebugMode: () => void;
  identify: (identity: InsightsIdentity) => void;
  trackPageView: (options?: TrackPageViewOptions) => void;
  track: (event: string, properties?: Record<string, unknown>) => void;
  startSessionRecording: () => void;
  stopSessionRecording: () => void;
  setupObserver: () => () => void;
}

// Command type for our queue
export type Command = {
  methodName: keyof AnalyticsService;
  args: unknown[];
};

export type InsightsIdentity = {
  userId: string;
  accountId: string;
  organisationId?: string;
  email?: string;
  name?: string;
};

export type TrackPageViewOptions = {
  includeDataLayer?: boolean;
  excludeIds?: string[];
} & Record<string, unknown>;
