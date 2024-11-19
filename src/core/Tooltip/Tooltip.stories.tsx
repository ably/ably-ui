import React from "react";
import Tooltip from "../Tooltip";

export default {
  title: "JS Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};

export const Central = {
  render: (args) => (
    <div className="w-256 h-256 flex items-center justify-center m-24 border mx-auto rounded-lg">
      <Tooltip>{args.children}</Tooltip>
    </div>
  ),
};

export const LeftBound = {
  render: (args) => (
    <div className="w-256 h-256 flex items-center m-24 border mx-auto rounded-lg">
      <Tooltip>{args.children}</Tooltip>
    </div>
  ),
};

export const Interactive = {
  render: () => (
    <div className="w-256 h-256 flex items-center justify-center m-24 border mx-auto rounded-lg">
      <Tooltip interactive>
        Here&apos;s some super stuff with a{" "}
        <a href="#" className="ui-link">
          super interactive link
        </a>{" "}
        in it
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Using the `interactive` prop allows you to navigate the cursor inside the tooltip and interact with it.",
      },
    },
  },
};
