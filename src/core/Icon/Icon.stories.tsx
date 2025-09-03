import React, { useState, useMemo } from "react";
import Icon from "../Icon";
import Button from "../Button";
import { IconName, iconNames, IconSize } from "./types";

export default {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["!autodocs"],
};

const iconVariants = ["outline", "solid", "mini", "micro", "legacy"] as const;
type IconVariant = (typeof iconVariants)[number];

const iconVariantSize = (variant: IconVariant): string => {
  switch (variant) {
    case "legacy":
    case "outline":
    case "solid":
      return "24px";
    case "mini":
      return "20px";
    case "micro":
      return "16px";
    default:
      return "24px";
  }
};

const getIconSize = (icon: string): IconSize => {
  if (icon.includes("-mini")) {
    return "20px";
  } else if (icon.includes("-micro")) {
    return "16px";
  } else {
    return "24px";
  }
};

const renderIcons = (iconSet: IconName[]) => {
  const [shownVariant, setShownVariant] = useState<IconVariant>("outline");

  const filteredIcons = useMemo(
    () =>
      iconSet.some((icon) => icon.includes("icon-gui-"))
        ? iconSet.filter(
            (icon) =>
              (shownVariant === "legacy" &&
                !iconVariants.some((variant) =>
                  icon.endsWith(`-${variant}`),
                )) ||
              icon.includes(`-${shownVariant}`),
          )
        : iconSet,
    [iconSet, shownVariant],
  );

  return (
    <div>
      <p className="p-4 pb-0">
        Below is a record of all custom icons available in the library. We also
        have access to all variants of icons in the{" "}
        <a
          href="https://heroicons.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="ui-link"
        >
          Heroicons
        </a>{" "}
        library.
      </p>
      {iconSet.some((icon) => icon.includes("-gui-")) && (
        <div className="flex items-center pt-4 gap-2 px-4 flex-wrap">
          <span className="ui-text-p1 text-ably-primary">Filter icons:</span>
          {iconVariants.map((variant) => (
            <Button
              key={variant}
              size="xs"
              disabled={shownVariant === variant}
              onClick={() => setShownVariant(variant)}
            >
              {variant} ({iconVariantSize(variant)})
            </Button>
          ))}
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-screen-lg mb-16 p-4">
        {filteredIcons.map((icon) => (
          <div
            className="border p-2 flex flex-col items-center justify-between gap-3 rounded"
            key={icon}
          >
            <div className="inline-flex">
              <div className="flex">
                <Icon
                  name={icon}
                  additionalCSS="hover:text-active-orange text-ably-primary transition-colors"
                  color="text-cool-black"
                  size={getIconSize(icon)}
                />
              </div>
            </div>
            <code className="ui-text-code2 text-ably-primary text-center flex flex-col items-center justify-center flex-1 gap-4">
              <p>{icon}</p>
            </code>
          </div>
        ))}
      </div>
    </div>
  );
};

export const GUIIcons = {
  render: () => renderIcons([...iconNames.gui]),
};

export const DisplayIcons = {
  render: () => renderIcons([...iconNames.display]),
};

export const SocialIcons = {
  render: () => renderIcons([...iconNames.social]),
};

export const TechIcons = {
  render: () => renderIcons([...iconNames.tech]),
};

export const ProductIcons = {
  render: () => renderIcons([...iconNames.product]),
};

export const IconWithSecondaryColor = {
  render: () => (
    <div className="flex items-center justify-center p-4 gap-6">
      <div className="flex gap-6">
        <h4 className="ui-text-h4 text-ably-primary">Non-themed:</h4>
        <Icon
          name="icon-gui-check-circled-fill"
          color="text-orange-600"
          size="1.5rem"
        />
        <Icon
          name="icon-gui-check-circled-fill"
          color="text-orange-600"
          secondaryColor="text-ably-primary"
          size="1.5rem"
        />
      </div>
      <div className="flex gap-6">
        <h4 className="ui-text-h4 text-ably-primary">Themed:</h4>
        <Icon
          name="icon-gui-check-circled-fill"
          color="text-orange-600"
          size="1.5rem"
        />
        <Icon
          name="icon-gui-check-circled-fill"
          color="text-orange-200 dark:text-orange-1000"
          secondaryColor="text-orange-600 dark:text-orange-600"
          size="1.5rem"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "By setting the `secondaryColor` prop, you can change the color of the icon's secondary elements, if supported in the underlying SVG. You can set either a CSS variable directly, or use a Tailwind class.\n\nThe right-hand icon here (`icon-gui-check-circled-fill`) has this property applied, resulting in it having a dark checkmark in the non-themed case, and inverted colors in the themed case.\n\nTo add support to an existing SVG, replace a `fill` attribute value with `var(--ui-icon-secondary-color)`.",
      },
    },
  },
};
