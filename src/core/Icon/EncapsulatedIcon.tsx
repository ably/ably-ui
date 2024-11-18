import React from "react";
import Icon, { IconProps } from "../Icon";
import { IconSize } from "./types";

type EncapsulatedIconProps = {
  className?: string;
  innerClassName?: string;
  iconSize?: IconSize;
} & IconProps;

const ICON_SIZE_REDUCTION = 12;
const ICON_HEIGHT_REDUCTION = 2;

const EncapsulatedIcon = ({
  size = "40px",
  iconSize,
  className,
  innerClassName,
  ...iconProps
}: EncapsulatedIconProps) => {
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
      className={`p-1 rounded-lg bg-gradient-to-t dark:bg-gradient-to-b ${className ?? "from-neutral-400 dark:from-neutral-900"}`}
      style={{ width: size, height: size }}
    >
      <div
        className={`flex items-center justify-center rounded-lg ${innerClassName ?? "bg-neutral-200 dark:bg-neutral-1100"}`}
        style={{ height: computedIconHeight }}
      >
        <Icon size={computedIconSize} {...iconProps} />
      </div>
    </div>
  );
};

export default EncapsulatedIcon;
