import React from "react";
import Icon, { IconProps } from "../Icon";
import useTheming from "../hooks/useTheming";
import { Theme } from "../styles/colors/types";
import { IconSize } from "./types";

type EncapsulatedIconProps = {
  theme?: Theme;
  className?: string;
  innerClassName?: string;
  iconSize?: IconSize;
} & IconProps;

const ICON_SIZE_REDUCTION = 12;
const ICON_HEIGHT_REDUCTION = 2;

const EncapsulatedIcon = ({
  theme = "dark",
  size = "40px",
  iconSize,
  className,
  innerClassName,
  ...iconProps
}: EncapsulatedIconProps) => {
  const { themeColor } = useTheming({
    baseTheme: "dark",
    theme,
  });
  let computedIconSize = size,
    computedIconHeight = size;

  if (iconSize) {
    computedIconSize = iconSize;
  } else if (size.toString().endsWith("px")) {
    const numericalSize = parseInt(size, 10);
    computedIconSize = `${numericalSize - ICON_SIZE_REDUCTION}px`;
    computedIconHeight = `${numericalSize - ICON_HEIGHT_REDUCTION}px`;
  } else {
    console.warn(
      `EncapsulatedIcon: Non-pixel units might not behave as expected`,
    );
  }

  return (
    <div
      className={`p-1 rounded-lg ${theme === "light" ? "bg-gradient-to-t" : "bg-gradient-to-b"} ${themeColor("from-neutral-900")} ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      <div
        className={`flex items-center justify-center rounded-lg ${themeColor("bg-neutral-1100")} ${innerClassName ?? ""}`}
        style={{ height: computedIconHeight }}
      >
        <Icon size={computedIconSize} {...iconProps} />
      </div>
    </div>
  );
};

export default EncapsulatedIcon;
