import React from "react";
import { DocsContainer } from "@storybook/blocks";
import { initialize, mswLoader } from "msw-storybook-addon";

import "./styles.css";
import theme from "./theme";
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
  },
  loaders: [mswLoader],
  tags: ["autodocs"],
};

export default preview;
