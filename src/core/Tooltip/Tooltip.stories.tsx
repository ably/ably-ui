import React from "react";
import Tooltip from "../Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};

export const Central = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-16 w-[600px]">
      <div className="font-mono text-center">dark</div>
      <div className="font-mono text-center">light</div>
      <div className="w-256 h-256 bg-neutral-1300 flex items-center justify-center m-24 border mx-auto rounded-lg">
        <Tooltip>{args.children}</Tooltip>
      </div>
      <div className="w-256 h-256 flex items-center justify-center m-24 border mx-auto rounded-lg">
        <Tooltip theme="light">{args.children}</Tooltip>
      </div>
    </div>
  ),
};

export const LeftBound = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-16 w-[600px]">
      <div className="font-mono text-center">dark</div>
      <div className="font-mono text-center">light</div>
      <div className="w-256 h-256 bg-neutral-1300 flex items-center m-24 border mx-auto rounded-lg">
        <Tooltip>{args.children}</Tooltip>
      </div>
      <div className="w-256 h-256 flex items-center m-24 border mx-auto rounded-lg">
        <Tooltip theme="light">{args.children}</Tooltip>
      </div>
    </div>
  ),
};

export const Interactive = {
  render: () => (
    <div className="grid grid-cols-2 gap-16 w-[600px]">
      <div className="font-mono text-center">dark</div>
      <div className="font-mono text-center">light</div>
      <div className="w-256 h-256 bg-neutral-1300 flex items-center justify-center m-24 border mx-auto rounded-lg">
        <Tooltip interactive>
          Here&apos;s some super stuff with a{" "}
          <a href="#" className="ui-link">
            super interactive link
          </a>{" "}
          in it
        </Tooltip>
      </div>
      <div className="w-256 h-256 flex items-center justify-center m-24 border mx-auto rounded-lg">
        <Tooltip theme="light" interactive>
          Here&apos;s some super stuff with a{" "}
          <a href="#" className="ui-link">
            super interactive link
          </a>{" "}
          in it
        </Tooltip>
      </div>
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
