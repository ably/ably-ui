/* eslint-disable @typescript-eslint/no-require-imports */
const { swcDir } = require("@swc/cli");
import type { Options } from "@swc/core";
import path from "path";

/**
 * This script configures SWC programatically to compile the project.
 *
 * The main reason for doing this over using .swcrc is to be able to
 * dynamically set feature flags based on environment variables. These
 * feature flags can then be used in the code to conditionally compile
 * different code paths.
 *
 * These are not neccessarily user facing features, they are more like
 * infrastructure within the package. An example could be to enable
 * debug logging in development, or to enable fetch with credentials
 * during development.
 *
 * A lof this was generated in conversation with Uncle Claude, in case
 * you were wondering...
 *
 */

// Define all possible feature flags. They key will be turned into a
// global variable wrapped with double underscores, e.g. __DEBUG_MODE__,
// and the value will be the environment variable to read.
const FEATURE_FLAGS = {
  ENABLE_FETCH_WITH_CREDENTIALS: "ENABLE_FETCH_WITH_CREDENTIALS",
  // DEBUG_MODE: 'DEBUG_MODE',
} as const;

// Helper to convert environment variable to boolean
const envToBool = (value: string | undefined): boolean => {
  if (!value) return false;
  return ["1", "true", "yes"].includes(value.toLowerCase());
};

// Get all feature flags from environment
const getFeatureFlags = () => {
  const flags: Record<string, string> = {};

  Object.entries(FEATURE_FLAGS).forEach(([key, envVar]) => {
    // Convert environment variable values to string 'true' or 'false'
    // This matches the format SWC expects in its globals configuration
    flags[`__${key}__`] = String(envToBool(process.env[envVar]));
  });

  return flags;
};

const getSwcConfig = (): Options => {
  const featureFlags = getFeatureFlags();

  return {
    jsc: {
      target: "es2021",
      parser: {
        syntax: "typescript",
        tsx: true,
        decorators: false,
        dynamicImport: false,
      },
      transform: {
        optimizer: {
          globals: {
            vars: featureFlags,
          },
        },
      },
    },
    sourceMaps: true,
    minify: true,
  };
};

// Execute the compilation
async function build() {
  try {
    await swcDir({
      swcOptions: getSwcConfig(),
      cliOptions: {
        filenames: ["src/core", "src/reset"],
        outDir: path.resolve(__dirname, "dist"),
        copyFiles: true,
        includeDotfiles: true,
        stripLeadingPaths: true,
        ignore: ["**/*.stories.tsx", "**/*.snap"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    });
    console.log("Build completed successfully");
    console.log("Active feature flags:", getFeatureFlags());
  } catch (error) {
    console.error("Build failed:", error);
    process.exit(1);
  }
}

// Run the build if this file is executed directly
if (require.main === module) {
  build();
}
