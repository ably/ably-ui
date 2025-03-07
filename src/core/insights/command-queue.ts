import {
  AnalyticsService,
  Command,
  InsightsConfig,
  InsightsIdentity,
} from "./types";
import { InsightsService } from "./service";
import * as logger from "./logger";

// Queue handler that will collect commands before initialization
export class InsightsCommandQueue implements AnalyticsService {
  private isInitialized: boolean = false;
  private queue: Command[] = [];
  private debugMode: boolean = false;
  private realImplementation: InsightsService | null = null;

  constructor() {
    // Create a proxy that will either queue commands or execute them directly
    return new Proxy(this, {
      get: (target: InsightsCommandQueue, prop: string) => {
        // Return actual properties of the queue
        if (prop in target && typeof target[prop] !== "function") {
          return target[prop];
        }

        // Return a function that either queues or executes the method call
        return (...args: unknown[]) => {
          if (!target.isInitialized || !target.realImplementation) {
            // Queue the command for later execution
            if (prop === "initInsights") {
              // Special handling for initInsights - execute it right away
              target.executeInitInsights(args[0] as InsightsConfig);
              return;
            }

            // For debug logging
            if (target.debugMode) {
              logger.debug(`Queuing method call: ${String(prop)}`, args);
            }

            target.queue.push({
              methodName: prop as keyof AnalyticsService,
              args,
            });

            return;
          }

          // Execute the command immediately on the real implementation
          if (typeof target.realImplementation[prop] === "function") {
            return target.realImplementation[prop](...args);
          }
        };
      },
    });
  }

  // Special handling for init since it needs to happen right away
  private executeInitInsights(config: InsightsConfig): void {
    this.debugMode = !!config.debug;

    if (this.debugMode) {
      logger.debug("Initializing insights");
    }

    // Create and initialize the real implementation
    this.realImplementation = new InsightsService();
    this.realImplementation.initInsights(config);

    // Mark as initialized and process the queue
    this.isInitialized = true;
    this.processQueue();
  }

  // Process all queued commands
  private processQueue(): void {
    if (this.debugMode) {
      logger.debug(`Processing ${this.queue.length} queued commands`);
    }

    while (this.queue.length > 0) {
      const cmd = this.queue.shift();
      if (
        cmd &&
        this.realImplementation &&
        typeof this.realImplementation[cmd.methodName] === "function"
      ) {
        try {
          if (this.debugMode) {
            logger.debug(
              `Executing queued command: ${cmd.methodName}`,
              cmd.args,
            );
          }

          const fn = this.realImplementation[cmd.methodName] as (
            ...args: unknown[]
          ) => unknown;

          // Execute the command with the real implementation
          fn.apply(this.realImplementation, cmd.args as unknown[]);
        } catch (e) {
          if (this.debugMode) {
            logger.error(
              `Error executing queued command: ${cmd.methodName}`,
              e,
            );
          }
        }
      }
    }
  }

  // Implement all methods required by AnalyticsService to satisfy TypeScript
  // (These won't be called directly due to the proxy)
  initInsights(_config: InsightsConfig): void {}
  enableDebugMode(): void {}
  disableDebugMode(): void {}
  identify(_identity: InsightsIdentity): void {}
  trackPageView(): void {}
  track(_event: string, _properties?: Record<string, unknown>): void {}
  startSessionRecording(): void {}
  stopSessionRecording(): void {}
  setupObserver(): () => void {
    return () => {};
  }
}
