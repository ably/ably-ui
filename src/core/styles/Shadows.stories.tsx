import React from "react";

export default {
  title: "Styles/Shadows",
};

const shadowClasses = {
  soft: [
    "ui-shadow-xs-soft",
    "ui-shadow-sm-soft",
    "ui-shadow-md-soft",
    "ui-shadow-lg-soft",
    "ui-shadow-xl-soft",
  ],
  medium: [
    "ui-shadow-xs-medium",
    "ui-shadow-sm-medium",
    "ui-shadow-md-medium",
    "ui-shadow-lg-medium",
    "ui-shadow-xl-medium",
  ],
  strong: [
    "ui-shadow-xs-strong",
    "ui-shadow-sm-strong",
    "ui-shadow-md-strong",
    "ui-shadow-lg-strong",
    "ui-shadow-xl-strong",
  ],
};

const shadowRow = (weight: "soft" | "medium" | "strong") => (
  <div className="flex gap-8">
    {shadowClasses[weight].map((shadowClass) => (
      <div
        key={shadowClass}
        className={`${weight === "strong" ? "bg-neutral-1100 text-white" : "bg-white"} rounded-lg w-16 h-16 ${shadowClass} flex items-center justify-center ui-text-p1`}
      >
        {shadowClass.split("-")[2]}
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
