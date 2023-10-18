const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    "cypress-plugin-snapshots": {
      autoCleanUp: true,
      imageConfig: {
        createDiffImage: true,
        resizeDevicePixelRatio: false,
        threshold: 0.0001,
        thresholdType: "percent",
      },
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "http://localhost:5000",
    excludeSpecPattern: ["**/__snapshots__/*", "**/__image_snapshots__/*"],
  },
});
