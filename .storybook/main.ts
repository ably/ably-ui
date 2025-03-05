import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  addons: [
    "@storybook/addon-essentials",
    "storybook-dark-mode",
    "@whitespace/storybook-addon-html",
  ],
  docs: {
    autodocs: true
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
