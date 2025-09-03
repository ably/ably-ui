import React from "react";
import { colorRoles } from "./types";

export default {
  title: "Styles/Colors",
};

const colorSet = (colors, useClass = "") =>
  colors.map((color) => {
    // Check if this is a utility object with light/dark colors
    const isUtility = typeof color === "object" && "lightColor" in color;
    const displayName = isUtility ? color.name : color;
    const key = isUtility ? color.name : color;

    return (
      <div
        key={key}
        className="rounded-lg w-32 bg-neutral-100 dark:bg-neutral-1200 flex flex-col"
      >
        {isUtility ? (
          // Split color view for utilities (diagonal)
          <div
            className="h-[6.25rem] rounded-t-lg"
            style={{
              background: `linear-gradient(45deg, var(--color-${color.lightColor}) 50%, var(--color-${color.darkColor}) 50%)`,
            }}
          />
        ) : (
          // Single color view for regular colors
          <div
            className={`h-[6.25rem] rounded-t-lg ${useClass}`}
            style={{ backgroundColor: useClass ? `` : `var(--color-${color})` }}
          />
        )}
        <div className="p-3 flex flex-col flex-1">
          <p className="ui-text-p2 font-semibold flex-1 text-ably-secondary">
            {displayName}
          </p>
          {isUtility ? (
            <p className="ui-text-p3 font-normal text-ably-tertiary text-xs">
              {color.lightColor} / {color.darkColor}
            </p>
          ) : (
            <>
              <p className="ui-text-p3 font-normal text-ably-tertiary">
                {varToValues(color)[0]}
              </p>
              <p className="ui-text-p3 text-[12px] font-normal text-ably-tertiary">
                {varToValues(color)[1]}
              </p>
            </>
          )}
        </div>
      </div>
    );
  });

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

export const AblyUtilityClasses = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      {colorSet([
        {
          name: "ably-primary",
          lightColor: "neutral-1300",
          darkColor: "neutral-000",
        },
        {
          name: "ably-primary-inverse",
          lightColor: "neutral-000",
          darkColor: "neutral-1300",
        },
        {
          name: "ably-secondary",
          lightColor: "neutral-1000",
          darkColor: "neutral-300",
        },
        {
          name: "ably-secondary-inverse",
          lightColor: "neutral-300",
          darkColor: "neutral-1000",
        },
        {
          name: "ably-tertiary",
          lightColor: "neutral-800",
          darkColor: "neutral-500",
        },
        {
          name: "ably-tertiary-inverse",
          lightColor: "neutral-500",
          darkColor: "neutral-800",
        },
        {
          name: "ably-label",
          lightColor: "neutral-700",
          darkColor: "neutral-600",
        },
        {
          name: "ably-label-inverse",
          lightColor: "neutral-600",
          darkColor: "neutral-700",
        },
      ])}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Utility classes that replace common light/dark theme pairs. Example: `.text-ably-primary` replaces `.text-neutral-1300 dark:text-neutral-000`",
      },
    },
  },
};

export const NeutralColors = {
  render: () => (
    <div className="flex flex-wrap gap-6">
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
    <div className="flex flex-wrap gap-6">
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
    <div className="flex flex-wrap gap-6">
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
    <div className="flex flex-wrap gap-6">{colorSet([...colorRoles.gui])}</div>
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
