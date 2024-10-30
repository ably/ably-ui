import React, { CSSProperties } from "react";
import { defaultIconSecondaryColor } from "./Icon/secondary-colors";
import { IconName, IconSize } from "./Icon/types";
import { ColorClass } from "./styles/colors/types";
import { convertTailwindClassToVar } from "./styles/colors/utils";

export type IconProps = {
  name: IconName;
  size?: IconSize;
  color?: ColorClass;
  secondaryColor?: ColorClass;
  additionalCSS?: string;
};

const Icon = ({
  name,
  size = "0.75rem",
  color,
  secondaryColor = defaultIconSecondaryColor(name),
  additionalCSS = "",
  ...additionalAttributes
}: IconProps) => (
  <svg
    className={`${color ?? ""} ${additionalCSS}`}
    style={
      {
        width: size,
        height: size,
        ...(secondaryColor && {
          "--ui-icon-secondary-color":
            convertTailwindClassToVar(secondaryColor),
        }),
      } as CSSProperties
    }
    {...additionalAttributes}
  >
    <use xlinkHref={`#sprite-${name}`} />
  </svg>
);

export default Icon;
