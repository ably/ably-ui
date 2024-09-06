import React from "react";

export default {
  title: "CSS/Colors",
};

const neutralColors = [
  "bg-neutral-000",
  "bg-neutral-100",
  "bg-neutral-200",
  "bg-neutral-300",
  "bg-neutral-400",
  "bg-neutral-500",
  "bg-neutral-600",
  "bg-neutral-700",
  "bg-neutral-800",
  "bg-neutral-900",
  "bg-neutral-1000",
  "bg-neutral-1100",
  "bg-neutral-1200",
  "bg-neutral-1300",
];

const orangeColors = [
  "bg-orange-100",
  "bg-orange-200",
  "bg-orange-300",
  "bg-orange-400",
  "bg-orange-500",
  "bg-orange-600",
  "bg-orange-700",
  "bg-orange-800",
  "bg-orange-900",
  "bg-orange-1000",
  "bg-orange-1100",
];

const secondaryColors = [
  "bg-yellow-100",
  "bg-yellow-200",
  "bg-yellow-300",
  "bg-yellow-400",
  "bg-yellow-500",
  "bg-yellow-600",
  "bg-yellow-700",
  "bg-yellow-800",
  "bg-yellow-900",
  "bg-green-100",
  "bg-green-200",
  "bg-green-300",
  "bg-green-400",
  "bg-green-500",
  "bg-green-600",
  "bg-green-700",
  "bg-green-800",
  "bg-green-900",
  "bg-blue-100",
  "bg-blue-200",
  "bg-blue-300",
  "bg-blue-400",
  "bg-blue-500",
  "bg-blue-600",
  "bg-blue-700",
  "bg-blue-800",
  "bg-blue-900",
  "bg-violet-100",
  "bg-violet-200",
  "bg-violet-300",
  "bg-violet-400",
  "bg-violet-500",
  "bg-violet-600",
  "bg-violet-700",
  "bg-violet-800",
  "bg-violet-900",
  "bg-pink-100",
  "bg-pink-200",
  "bg-pink-300",
  "bg-pink-400",
  "bg-pink-500",
  "bg-pink-600",
  "bg-pink-700",
  "bg-pink-800",
  "bg-pink-900",
];

const guiColors = [
  "bg-gui-blue-default-light",
  "bg-gui-blue-hover-light",
  "bg-gui-blue-active-light",
  "bg-gui-blue-default-dark",
  "bg-gui-blue-hover-dark",
  "bg-gui-blue-active-dark",
  "bg-gui-blue-focus",
  "bg-gui-unavailable",
  "bg-gui-success-green",
  "bg-gui-error-red",
  "bg-gui-focus",
  "bg-gui-focus-outline",
  "bg-gui-visited",
];

const colorSet = (colors) =>
  colors.map((color) => (
    <div
      key={color}
      className="rounded-lg w-128 ui-shadow-lg-soft flex flex-col"
    >
      <div className={`${color} h-[100px] rounded-t-lg`} />
      <div className="p-12 flex flex-col flex-1">
        <p className="ui-text-p2 font-semibold flex-1">
          {color.replace("bg-", "")}
        </p>
        <p className="ui-text-p3 font-normal text-neutral-800">
          {varToValues(color)[0]}
        </p>
        <p className="ui-text-p3 text-[12px] font-normal text-neutral-800">
          {varToValues(color)[1]}
        </p>
      </div>
    </div>
  ));

const varToValues = (color: string) => {
  // Convert the computed color value in the page to a hex string
  const hex = getComputedStyle(document.body).getPropertyValue(
    color.replace("bg-", "--color-"),
  );

  // Parse the hex string into its RGB components
  const bigint = parseInt(hex.replace(/^#/, ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return [hex, `rgb(${r}, ${g}, ${b})`];
};

export const NeutralColors = {
  render: () => (
    <div className="flex flex-wrap gap-24">{colorSet(neutralColors)}</div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example usage: `.text-neutral-1000`, `.bg-neutral-1000`",
      },
    },
  },
};

export const OrangeColors = {
  render: () => (
    <div className="flex flex-wrap gap-24">{colorSet(orangeColors)}</div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example usage: `.text-orange-600`, `.bg-orange-600`",
      },
    },
  },
};

export const SecondaryColors = {
  render: () => (
    <div className="flex flex-wrap gap-24">{colorSet(secondaryColors)}</div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example usage: `.text-green-1000`, `.bg-green-1000`",
      },
    },
  },
};

export const GUIColors = {
  render: () => (
    <div className="flex flex-wrap gap-24">{colorSet(guiColors)}</div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Example usage: `.text-gui-blue-default`, `.bg-gui-blue-default`",
      },
    },
  },
};
