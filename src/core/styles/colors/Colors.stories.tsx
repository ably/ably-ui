import React from "react";
import { colorRoles } from "./types";

export default {
  title: "CSS/Colors",
};

const colorSet = (colors, useClass = "") =>
  colors.map((color) => (
    <div
      key={color}
      className="rounded-lg w-128 ui-shadow-lg-soft flex flex-col"
    >
      <div
        className={`h-[100px] rounded-t-lg ${useClass}`}
        style={{ backgroundColor: useClass ? `` : `var(--color-${color})` }}
      />
      <div className="p-12 flex flex-col flex-1">
        <p className="ui-text-p2 font-semibold flex-1 text-neutral-1000 dark:text-neutral-300">
          {color}
        </p>
        <p className="ui-text-p3 font-normal text-neutral-800 dark:text-neutral-500">
          {varToValues(color)[0]}
        </p>
        <p className="ui-text-p3 text-[12px] font-normal text-neutral-800 dark:text-neutral-500">
          {varToValues(color)[1]}
        </p>
      </div>
    </div>
  ));

const varToValues = (color: string) => {
  // Convert the computed color value in the page to a hex string
  const hex = getComputedStyle(document.body).getPropertyValue(
    `--color-${color}`,
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
    <div className="flex flex-wrap gap-24">
      {colorSet([...colorRoles.neutral])}
    </div>
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
    <div className="flex flex-wrap gap-24">
      {colorSet([...colorRoles.orange])}
    </div>
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
    <div className="flex flex-wrap gap-24">
      {colorSet([...colorRoles.secondary])}
    </div>
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
    <div className="flex flex-wrap gap-24">{colorSet([...colorRoles.gui])}</div>
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
