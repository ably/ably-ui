import React from "react";
import Tooltip from "../Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
};

export const Default = {
  render: () => (
    <div className="w-64 h-64 flex items-center justify-center m-6 border mx-auto rounded-lg">
      <Tooltip>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Tooltip>
    </div>
  ),
};

export const Interactive = {
  render: () => (
    <div className="w-64 h-64 flex items-center justify-center m-6 border mx-auto rounded-lg">
      <Tooltip interactive>
        Here&apos;s some super stuff with a{" "}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            alert("Tooltip link clicked!");
          }}
          className="ui-link"
        >
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
