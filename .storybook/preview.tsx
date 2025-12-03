import { initialize, mswLoader } from "msw-storybook-addon";
import type { Preview } from "@storybook/react-vite";
import { withThemeByClassName } from "@storybook/addon-themes";

import "./styles.css";
import theme from "./theme";

initialize({
  onUnhandledRequest: "bypass",
  quiet: true, // Reduce MSW logging
  serviceWorker: {
    url:
      location.hostname === "ably.github.io"
        ? "/ably-ui/mockServiceWorker.js"
        : "/mockServiceWorker.js",
  },
});

const preview: Preview = {
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
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "ui-theme-light",
        dark: "ui-theme-dark",
      },
      defaultTheme: "light",
    }),
  ],
  loaders: [mswLoader],
  tags: ["autodocs"],
};

export default preview;
