import React, { CSSProperties, useCallback } from "react";

import { defaultIconSecondaryColor, guiIconAliases } from "./Icon/utils";
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

  const processedName = guiIconAliases[name] ?? name;
  const iconName =
    variant && !processedName.endsWith(`-${variant}`)
      ? `${processedName}-${variant}`
      : processedName;

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

      return (
        <svg
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
        >
          <use xlinkHref={`#sprite-${iconName}`} />
        </svg>
      );
    },
    [
      iconName,
      size,
      color,
      additionalCSS,
      additionalAttributes,
      lightSecondaryColor,
      darkSecondaryColor,
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
