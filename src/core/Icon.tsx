import React, { CSSProperties } from "react";
import { defaultIconSecondaryColor } from "./Icon/secondary-colors";
import { IconName } from "./Icon/types";
import { ColorClass } from "./styles/colors/types";

type IconProps = {
  name: IconName;
  size?: string;
  color?: ColorClass;
  secondaryColor?: ColorClass;
  additionalCSS?: string;
};

const convertTailwindClassToVar = (className: string) =>
  className.replace(/(text|bg)-([a-z0-9-]+)/gi, "var(--color-$2)");

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
