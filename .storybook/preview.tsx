import React from "react";
import { initialize, mswLoader } from "msw-storybook-addon";

import "./styles.css";
import { themes } from "storybook/theming";
import theme, { brandImage, brandImageDark } from "./theme";

initialize({
  onUnhandledRequest: "bypass",
  serviceWorker: {
    url:
      location.hostname === "ably.github.io"
        ? "/ably-ui/mockServiceWorker.js"
        : "/mockServiceWorker.js",
  },
});

const preview = {
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
        order: ["Features", "Components", "Styles"],
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
      darkClass: "ui-theme-dark",
      lightClass: "ui-theme-light",
    },
  },
  loaders: [mswLoader],
  tags: ["autodocs"],
};

export default preview;
