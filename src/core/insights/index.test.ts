/**
 * @vitest-environment jsdom
 */

import { describe, expect, beforeEach, afterEach, it, vi } from "vitest";

import * as datalayer from "./datalayer";
import * as mixpanel from "./mixpanel";
import * as posthog from "./posthog";
import * as logger from "./logger";
import * as insights from "./index";

// Mock the dependencies
vi.mock("./datalayer", () => ({
  track: vi.fn(),
}));

vi.mock("./mixpanel", () => ({
  initMixpanel: vi.fn(),
  enableDebugMode: vi.fn(),
  disableDebugMode: vi.fn(),
  identify: vi.fn(),
  trackPageView: vi.fn(),
  track: vi.fn(),
  startSessionRecording: vi.fn(),
  stopSessionRecording: vi.fn(),
}));

vi.mock("./posthog", () => ({
  initPosthog: vi.fn(),
  enableDebugMode: vi.fn(),
  disableDebugMode: vi.fn(),
  identify: vi.fn(),
  trackPageView: vi.fn(),
  track: vi.fn(),
  startSessionRecording: vi.fn(),
  stopSessionRecording: vi.fn(),
}));

vi.mock("./logger", () => ({
  debug: vi.fn(),
  info: vi.fn(),
  warn: vi.fn(),
  error: vi.fn(),
}));

describe("Insights Command Queue", () => {
  const testConfig = {
    debug: true,
    mixpanelToken: "test-token",
    mixpanelAutoCapture: false,
    mixpanelRecordSessionsPercent: 10,
    posthogApiKey: "test-key",
    posthogApiHost: "test-host",
  };

  const testIdentity = {
    userId: "user-123",
    accountId: "account-456",
    organisationId: "org-789",
    email: "test@example.com",
    name: "Test User",
  };

  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();

    // Reset the module to clear any internal state
    vi.resetModules();
  });

  afterEach(() => {
    // Cleanup document event listeners
    document.body.replaceWith(document.body.cloneNode(true));
  });

  describe("Pre-initialization Queueing", () => {
    it("should queue methods called before initialization", async () => {
      // Call methods before initialization
      insights.track("early_event", { early: true });
      insights.identify(testIdentity);
      insights.trackPageView();

      // Verify nothing has been called yet on the underlying services
      expect(mixpanel.track).not.toHaveBeenCalled();
      expect(posthog.track).not.toHaveBeenCalled();
      expect(datalayer.track).not.toHaveBeenCalled();
      expect(mixpanel.identify).not.toHaveBeenCalled();
      expect(posthog.identify).not.toHaveBeenCalled();
      expect(mixpanel.trackPageView).not.toHaveBeenCalled();
      expect(posthog.trackPageView).not.toHaveBeenCalled();

      // Now initialize
      insights.initInsights(testConfig);

      // Initialize should be called immediately
      expect(mixpanel.initMixpanel).toHaveBeenCalledWith(
        testConfig.mixpanelToken,
        testConfig.mixpanelAutoCapture,
        testConfig.debug,
        testConfig.mixpanelRecordSessionsPercent,
      );
      expect(posthog.initPosthog).toHaveBeenCalledWith(
        testConfig.posthogApiKey,
        testConfig.posthogApiHost,
      );

      // Queued methods should now be called in the correct order
      expect(mixpanel.track).toHaveBeenCalledWith("early_event", {
        early: true,
      });
      expect(posthog.track).toHaveBeenCalledWith("early_event", {
        early: true,
      });
      expect(datalayer.track).toHaveBeenCalledWith("early_event", {
        early: true,
      });

      expect(mixpanel.identify).toHaveBeenCalledWith(testIdentity);
      expect(posthog.identify).toHaveBeenCalledWith(testIdentity);

      expect(mixpanel.trackPageView).toHaveBeenCalled();
      expect(posthog.trackPageView).toHaveBeenCalled();
    });

    it("should handle errors in queued methods gracefully", async () => {
      // Setup an error for one of the methods
      mixpanel.track.mockImplementationOnce(() => {
        throw new Error("Mixpanel error");
      });

      // Call methods before initialization
      insights.track("error_event", { error: true });
      insights.trackPageView();

      // Now initialize
      insights.initInsights(testConfig);

      // Should have logged the error but continued processing the queue
      expect(logger.error).toHaveBeenCalledWith(
        expect.stringContaining("Failed to track event in Mixpanel"),
        expect.any(Error),
      );

      // The other methods should still be called
      expect(posthog.track).toHaveBeenCalledWith("error_event", {
        error: true,
      });
      expect(datalayer.track).toHaveBeenCalledWith("error_event", {
        error: true,
      });
      expect(mixpanel.trackPageView).toHaveBeenCalled();
      expect(posthog.trackPageView).toHaveBeenCalled();
    });
  });

  describe("Post-initialization Direct Execution", () => {
    beforeEach(() => {
      // Initialize first
      insights.initInsights(testConfig);
      // Clear the mocks to focus on post-init behavior
      vi.clearAllMocks();
    });

    it("should directly call methods after initialization", () => {
      // Call methods after initialization
      insights.track("post_init_event", { post: true });

      // Should be called immediately
      expect(mixpanel.track).toHaveBeenCalledWith("post_init_event", {
        post: true,
      });
      expect(posthog.track).toHaveBeenCalledWith("post_init_event", {
        post: true,
      });
      expect(datalayer.track).toHaveBeenCalledWith("post_init_event", {
        post: true,
      });
    });

    it("should handle all exported methods correctly", () => {
      // Test each exported method
      insights.identify(testIdentity);
      expect(mixpanel.identify).toHaveBeenCalledWith(testIdentity);
      expect(posthog.identify).toHaveBeenCalledWith(testIdentity);

      insights.trackPageView();
      expect(mixpanel.trackPageView).toHaveBeenCalled();
      expect(posthog.trackPageView).toHaveBeenCalled();

      insights.startSessionRecording();
      expect(mixpanel.startSessionRecording).toHaveBeenCalled();
      expect(posthog.startSessionRecording).toHaveBeenCalled();

      insights.stopSessionRecording();
      expect(mixpanel.stopSessionRecording).toHaveBeenCalled();
      expect(posthog.stopSessionRecording).toHaveBeenCalled();

      insights.enableDebugMode();
      expect(mixpanel.enableDebugMode).toHaveBeenCalled();
      expect(posthog.enableDebugMode).toHaveBeenCalled();

      insights.disableDebugMode();
      expect(mixpanel.disableDebugMode).toHaveBeenCalled();
      expect(posthog.disableDebugMode).toHaveBeenCalled();
    });
  });

  describe("Observer Setup", () => {
    beforeEach(() => {
      insights.initInsights(testConfig);
      vi.clearAllMocks();
    });

    it("should set up click event observer and track clicks", () => {
      // Setup observer
      const cleanup = insights.setupObserver();

      // Create a test element with insight attributes
      const testElement = document.createElement("button");
      testElement.setAttribute("data-insight-event", "button_clicked");
      testElement.setAttribute("data-insight-button-id", "test-123");
      document.body.appendChild(testElement);

      // Simulate click
      testElement.click();

      // Should track the event
      expect(mixpanel.track).toHaveBeenCalledWith("button_clicked", {
        buttonId: "test-123",
      });
      expect(posthog.track).toHaveBeenCalledWith("button_clicked", {
        buttonId: "test-123",
      });
      expect(datalayer.track).toHaveBeenCalledWith("button_clicked", {
        buttonId: "test-123",
      });

      // Test cleanup
      cleanup();

      // Reset tracking mocks
      vi.clearAllMocks();

      // Click again - should not track
      testElement.click();
      expect(mixpanel.track).not.toHaveBeenCalled();
    });

    it("should handle nested elements correctly", () => {
      // Setup observer
      insights.setupObserver();

      // Create parent element with insight attributes
      const parentElement = document.createElement("div");
      parentElement.setAttribute("data-insight-event", "container_clicked");
      parentElement.setAttribute(
        "data-insight-container-id",
        "parent-container",
      );

      // Create child element without insights
      const childElement = document.createElement("span");
      childElement.textContent = "Click me";

      // Nest elements
      parentElement.appendChild(childElement);
      document.body.appendChild(parentElement);

      // Click the child element
      childElement.click();

      // Should find and use the parent's insight attributes
      expect(mixpanel.track).toHaveBeenCalledWith("container_clicked", {
        containerId: "parent-container",
      });
    });
  });

  describe("Error Handling", () => {
    it("should handle initialization errors gracefully", () => {
      // Setup an error in initialization
      mixpanel.initMixpanel.mockImplementationOnce(() => {
        throw new Error("Mixpanel init error");
      });

      // Should not throw when initializing
      expect(() => {
        insights.initInsights(testConfig);
      }).not.toThrow();

      // Should log the error
      expect(logger.error).toHaveBeenCalledWith(
        expect.stringContaining("Failed to initialize Mixpanel"),
        expect.any(Error),
      );
    });

    it("should handle runtime errors in methods", () => {
      // Initialize first
      insights.initInsights(testConfig);
      vi.clearAllMocks();

      // Setup errors in tracking
      mixpanel.track.mockImplementationOnce(() => {
        throw new Error("Mixpanel track error");
      });

      posthog.track.mockImplementationOnce(() => {
        throw new Error("Posthog track error");
      });

      // Should not throw when tracking
      expect(() => {
        insights.track("error_test", { test: true });
      }).not.toThrow();

      // Should log the errors
      expect(logger.error).toHaveBeenCalledWith(
        expect.stringContaining("Failed to track event in Mixpanel"),
        expect.any(Error),
      );

      expect(logger.error).toHaveBeenCalledWith(
        expect.stringContaining("Failed to track event in Posthog"),
        expect.any(Error),
      );

      // Should still try to track with datalayer
      expect(datalayer.track).toHaveBeenCalledWith("error_test", {
        test: true,
      });
    });
  });

  describe("Debug Mode", () => {
    it("should respect debug flag in config", () => {
      // Initialize with debug: true
      insights.initInsights(testConfig);

      // Should log debug messages
      expect(logger.debug).toHaveBeenCalledWith(
        expect.stringContaining("Initializing insights"),
      );

      // Clear mocks and test tracking
      vi.clearAllMocks();
      insights.track("debug_test", { debug: true });

      // Should log info about tracking
      expect(logger.info).toHaveBeenCalledWith(
        expect.stringContaining("Tracking event"),
        expect.objectContaining({
          event: "debug_test",
          properties: { debug: true },
        }),
      );
    });

    it("should not log debug info when debug is false", () => {
      // Initialize with debug: false
      insights.initInsights({
        ...testConfig,
        debug: false,
      });

      // Clear mocks and test tracking
      vi.clearAllMocks();
      insights.track("no_debug_test", { debug: false });

      // Should not log info about tracking
      expect(logger.info).not.toHaveBeenCalled();
    });
  });
});
