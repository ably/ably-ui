import React from "react";
import Icon from "../Icon";
import EncapsulatedIcon from "./EncapsulatedIcon";
import loadIcons from "../icons";
import { IconName, iconNames } from "./types";
import { Theme } from "../styles/colors/types";

export default {
  title: "JS Components/Icon",
  component: Icon,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

const renderIcons = (
  iconSet: IconName[],
  encapsulated?: boolean,
  theme?: Theme,
) => {
  loadIcons();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 ui-grid-gap max-w-screen-lg mb-64">
      {iconSet.map((icon) => (
        <div
          className="border p-16 flex flex-col sm:flex-row items-center justify-between gap-12"
          key={icon}
        >
          <code className="ui-text-code mb-8 block">{icon}</code>
          <div className="border inline-flex flex-0">
            <div className="flex pi-checkered-bg">
              {encapsulated ? (
                <EncapsulatedIcon name={icon} theme={theme ?? "dark"} />
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
  render: () => renderIcons([...iconNames.core]),
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

export const Other = {
  render: () => renderIcons([...iconNames.other]),
};

export const IconWithSecondaryColor = {
  render: () => (
    <div className="flex items-center justify-center p-16 gap-24">
      <Icon
        name="icon-gui-check-circled-fill"
        color="text-active-orange"
        size="1.5rem"
      />
      <Icon
        name="icon-gui-check-circled-fill"
        color="text-active-orange"
        secondaryColor="text-neutral-1300"
        size="1.5rem"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "By setting the `secondaryColor` prop, you can change the color of the icon's secondary elements, if supported in the underlying SVG. You can set either a CSS variable directly, or use a Tailwind class.\n\nThe right-hand icon here (`icon-gui-check-circled-fill`) has this property applied, resulting in it having a dark checkmark.\n\nTo add support to an existing SVG, replace a `fill` attribute value with `var(--ui-icon-secondary-color)`.",
      },
    },
  },
};

export const DarkEncapsulatedIcons = {
  render: () => renderIcons([...iconNames.product], true),
};

export const LightEncapsulatedIcons = {
  render: () => renderIcons([...iconNames.product], true, "light"),
};
