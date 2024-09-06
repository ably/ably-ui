import React from "react";

export default {
  title: "CSS/Shadows",
};

const sizes = ["xs", "sm", "md", "lg", "xl"];

const shadowRow = (weight: "soft" | "medium" | "strong") => (
  <div className="flex gap-32">
    {sizes.map((size) => (
      <div
        key={size}
        className={`${weight === "strong" ? "bg-neutral-1100 text-white" : "bg-white"} rounded-lg w-64 h-64 ui-shadow-${size}-${weight} flex items-center justify-center ui-text-p1`}
      >
        {size}
      </div>
    ))}
  </div>
);

export const Soft = {
  render: () => shadowRow("soft"),
  parameters: {
    docs: {
      description: {
        story: "Example usage: `.ui-shadow-xs-soft`",
      },
    },
  },
};

export const Medium = {
  render: () => shadowRow("medium"),
  parameters: {
    docs: {
      description: {
        story: "Example usage: `.ui-shadow-xs-medium`",
      },
    },
  },
};

export const Strong = {
  render: () => shadowRow("strong"),
  parameters: {
    docs: {
      description: {
        story: "Example usage: `.ui-shadow-xs-strong`",
      },
    },
  },
};
