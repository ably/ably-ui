import React, { CSSProperties, useCallback, useMemo } from "react";

import {
  defaultIconSecondaryColor,
  getHeroicon,
  toPascalCase,
} from "./Icon/utils";
import * as IconComponents from "./Icon/components";
import { IconName, IconSize } from "./Icon/types";
import { ColorClass, ColorThemeSet } from "./styles/colors/types";
import { convertTailwindClassToVar } from "./styles/colors/utils";
import cn from "./utils/cn";

export type IconProps = {
  name: IconName;
  size?: IconSize;
  color?: ColorClass | ColorThemeSet;
  secondaryColor?: ColorClass | ColorThemeSet;
  additionalCSS?: string;
  variant?: "outline" | "solid" | "micro" | "mini";
};

// Helper function to get a heroicon component from the static map
const getHeroiconComponent = (
  iconName: string,
): React.ComponentType<React.SVGProps<SVGSVGElement>> | null => {
  // Parse the icon name to extract heroicon name and variant
  // Expected format: icon-gui-{heroicon-name}-{variant}
  const match = iconName.match(/^icon-gui-(.+)-(outline|solid|mini|micro)$/);
  if (!match) {
    return null;
  }

  const [, heroiconName, variant] = match;
  const component = getHeroicon(heroiconName, variant);
  return component;
};

const Icon = ({
  name,
  size = "0.75rem",
  color,
  secondaryColor,
  additionalCSS = "",
  variant,
  ...additionalAttributes
}: IconProps) => {
  const [lightSecondaryColor, darkSecondaryColor] = (
    secondaryColor ?? ""
  ).split(" dark:") as [ColorClass, ColorClass | undefined];

  const iconName =
    variant && !name.endsWith(`-${variant}`) ? `${name}-${variant}` : name;

  // Get the local icon component (memoized)
  const LocalIconComponent = useMemo(():
    | React.ComponentType<React.SVGProps<SVGSVGElement>>
    | undefined => {
    return IconComponents[
      toPascalCase(iconName) as keyof typeof IconComponents
    ];
  }, [iconName]);

  // Get the heroicon component only if no local component is found (memoized)
  const HeroiconComponent = useMemo(() => {
    return LocalIconComponent ? null : getHeroiconComponent(iconName);
  }, [LocalIconComponent, iconName]);

  const iconSvg = useCallback(
    (secondaryColor?: ColorClass, isDark?: boolean, isThemed?: boolean) => {
      let secondaryColorValue;
      if (secondaryColor) {
        secondaryColorValue = convertTailwindClassToVar(secondaryColor);
      } else if (defaultIconSecondaryColor(name)) {
        secondaryColorValue = convertTailwindClassToVar(
          defaultIconSecondaryColor(name),
        );
      }

      // Try local component first
      const IconComponent = LocalIconComponent || HeroiconComponent;

      if (!IconComponent) {
        return null;
      }

      return (
        <IconComponent
          className={cn(
            { [`${color}`]: color },
            { [`${additionalCSS}`]: additionalCSS },
            {
              "hidden dark:block": secondaryColor && !isDark && isThemed,
            },
            {
              "dark:hidden": secondaryColor && isDark && isThemed,
            },
          )}
          style={
            {
              width: size,
              height: size,
              ...(secondaryColorValue && {
                "--ui-icon-secondary-color": secondaryColorValue,
              }),
            } as CSSProperties
          }
          {...additionalAttributes}
        />
      );
    },
    [
      LocalIconComponent,
      HeroiconComponent,
      iconName,
      size,
      color,
      additionalCSS,
      lightSecondaryColor,
      darkSecondaryColor,
      name,
    ],
  );

  if (lightSecondaryColor && darkSecondaryColor) {
    return (
      <>
        {iconSvg(lightSecondaryColor, false, !!darkSecondaryColor)}
        {iconSvg(darkSecondaryColor, true, true)}
      </>
    );
  } else if (lightSecondaryColor) {
    return iconSvg(lightSecondaryColor, false, !!darkSecondaryColor);
  } else {
    return iconSvg();
  }
};

export default Icon;
