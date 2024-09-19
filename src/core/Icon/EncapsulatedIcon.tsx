import React from "react";
import Icon, { IconProps } from "../Icon";
import { determineThemeColor } from "../styles/colors/utils";
import { ColorClass, Theme } from "../styles/colors/types";

type EncapsulatedIconProps = {
  theme?: Theme;
  className?: string;
  innerClassName?: string;
  iconSize?: string;
} & IconProps;

const EncapsulatedIcon = ({
  theme = "dark",
  size = "40px",
  iconSize,
  className,
  innerClassName,
  ...iconProps
}: EncapsulatedIconProps) => {
  const t = (color: ColorClass) => determineThemeColor("dark", theme, color);
  const numericalSize = parseInt(size, 10);
  const numericalIconSize = iconSize
    ? parseInt(iconSize, 10)
    : numericalSize - 12;

  return (
    <div
      className={`p-1 rounded-lg ${theme === "light" ? "bg-gradient-to-t" : "bg-gradient-to-b"} ${t("from-neutral-900")} ${className ?? ""}`}
      style={{ width: numericalSize, height: numericalSize }}
    >
      <div
        className={`flex items-center justify-center rounded-lg ${t("bg-neutral-1100")} ${innerClassName ?? ""}`}
        style={{ height: numericalSize - 2 }}
      >
        <Icon size={`${numericalIconSize}`} {...iconProps} />
      </div>
    </div>
  );
};

export default EncapsulatedIcon;
