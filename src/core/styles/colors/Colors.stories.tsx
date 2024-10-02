import React from "react";
import { colorNames } from "./types";
import { determineThemeColor } from "./utils";
import Icon from "../../Icon";

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
        <p className="ui-text-p2 font-semibold flex-1">{color}</p>
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
      {colorSet([...colorNames.neutral])}
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
      {colorSet([...colorNames.orange])}
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
      {colorSet([...colorNames.secondary])}
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
    <div className="flex flex-wrap gap-24">{colorSet([...colorNames.gui])}</div>
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

export const DynamicTheming = {
  render: () => (
    <div className="flex items-center">
      <div className="flex flex-wrap gap-24">
        {colorSet(["orange-300"], "bg-orange-300")}
      </div>
      <Icon name="icon-gui-arrow-right" size="48" additionalCSS="m-16"></Icon>
      <div className="flex flex-wrap gap-24">
        {colorSet(
          ["orange-900"],
          determineThemeColor("dark", "light", "bg-orange-300"),
        )}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "We can generate alternatives for a color based on the theme. Example usage: `determineThemeColor('dark', 'light', 'bg-orange-300')` - this takes a base theme of 'dark', a target theme of 'light', and the colour to convert.",
      },
    },
  },
};
