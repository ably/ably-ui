import React from "react";
import { DocsContainer } from "@storybook/blocks";
import { initialize, mswLoader } from "msw-storybook-addon";

import "./styles.css";
import { themes } from "@storybook/theming";
import theme, { brandImage, brandImageDark } from "./theme";
import loadIcons from "../src/core/icons";
import { Preview } from "@storybook/react";

initialize({
  onUnhandledRequest: "bypass",
  serviceWorker: {
    url:
      location.hostname === "ably.github.io"
        ? "/ably-ui/mockServiceWorker.js"
        : "/mockServiceWorker.js",
  },
});

const preview: Preview = {
  decorators: [
    (Story) => {
      loadIcons();
      return <Story />;
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme,
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["CSS", "Features", "JS Components", "Brand"],
      },
    },
    darkMode: {
      dark: {
        ...themes.dark,
        fontBase: '"Manrope", sans-serif',
        brandImage: brandImageDark,
      },
      light: {
        ...themes.light,
        fontBase: '"Manrope", sans-serif',
        brandImage: brandImage,
      },
      stylePreview: true,
      darkClass: ["bg-neutral-1300"],
      lightClass: ["bg-neutral-000"],
    },
  },
  loaders: [mswLoader],
  tags: ["autodocs"],
};

export default preview;
