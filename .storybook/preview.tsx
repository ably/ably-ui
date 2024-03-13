import React from "react";
import { DocsContainer } from "@storybook/blocks";
import { rest } from "msw";
import { initialize, mswDecorator } from "msw-storybook-addon";

import "./styles.css";
import theme from "./theme";
import "../src/core/utils/syntax-highlighter";
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
    actions: { argTypesRegex: "^on[A-Z].*" },
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
  decorators: [
    mswDecorator,
    (Story) => {
      loadIcons();
      return Story();
    },
  ],
};

export default preview;
