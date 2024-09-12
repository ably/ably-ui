import React from "react";
import { DocsContainer } from "@storybook/blocks";
import { initialize, mswLoader } from "msw-storybook-addon";

import "./styles.css";
import { themes } from "@storybook/theming";
import theme, { brandImage, brandImageDark } from "./theme";
import loadIcons from "../src/core/icons";

const docsContainer = ({ children, context, ...props }) => {
  loadIcons();

  return (
    <DocsContainer context={context} {...props}>
      {children}
    </DocsContainer>
  );
};

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
      container: docsContainer,
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["CSS", "JS Components", "Brand"],
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
