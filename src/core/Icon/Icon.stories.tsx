import React from "react";
import Icon from "../Icon";
import EncapsulatedIcon from "./EncapsulatedIcon";
import loadIcons from "../icons";
import { IconName, iconNames } from "./types";

export default {
  title: "JS Components/Icon",
  component: Icon,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

const renderIcons = (iconSet: IconName[], encapsulated?: boolean) => {
  loadIcons();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 ui-grid-gap max-w-screen-lg mb-64">
      {iconSet.map((icon) => (
        <div
          className="border p-16 flex flex-col sm:flex-row items-center justify-between gap-12 rounded-lg"
          key={icon}
        >
          <code className="ui-text-code text-neutral-1300 dark:text-neutral-000 mb-8 block">
            {icon}
          </code>
          <div className="border inline-flex flex-0">
            <div className="flex pi-checkered-bg">
              {encapsulated ? (
                <EncapsulatedIcon name={icon} />
              ) : (
                <Icon
                  name={icon}
                  additionalCSS="hover:text-active-orange"
                  color="text-cool-black"
                  size="1.5rem"
                />
              )}
            </div>
          </div>
        </div>
      ))}
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

export const EncapsulatedIcons = {
  render: () => renderIcons([...iconNames.product], true),
};

export const OtherIcons = {
  render: () => renderIcons([...iconNames.other]),
};

export const IconWithSecondaryColor = {
  render: () => (
    <div className="flex items-center justify-center p-16 gap-24">
      <div className="flex gap-24">
        <h4 className="ui-text-h4 text-neutral-1300 dark:text-neutral-000">
          Non-themed:
        </h4>
        <Icon
          name="icon-gui-check-circled-fill"
          color="text-orange-600"
          size="1.5rem"
        />
        <Icon
          name="icon-gui-check-circled-fill"
          color="text-orange-600"
          secondaryColor="text-neutral-1300"
          size="1.5rem"
        />
      </div>
      <div className="flex gap-24">
        <h4 className="ui-text-h4 text-neutral-1300 dark:text-neutral-000">
          Themed:
        </h4>
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
