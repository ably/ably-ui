import React from "react";
import Tooltip from "./component";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    children: "Example content",
  },
};

export const Central = {
  render: (args) => (
    <div className="w-256 h-256 flex items-center justify-center m-24 border">
      <Tooltip>{args.children}</Tooltip>
    </div>
  ),
};

export const LeftBound = {
  render: (args) => (
    <div className="w-256 h-256 flex items-center m-24 border">
      <Tooltip>{args.children}</Tooltip>
    </div>
  ),
};
