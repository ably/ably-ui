import React from "react";
import Icon, { IconProps } from "../Icon";
import { determineThemeColor } from "../styles/colors/utils";
import { ColorClass, Theme } from "../styles/colors/types";

type EncapsulatedIconProps = {
  theme?: Theme;
  className?: string;
} & IconProps;

const EncapsulatedIcon = ({
  theme = "dark",
  size = "40px",
  className,
  ...iconProps
}: EncapsulatedIconProps) => {
  const t = (color: ColorClass) => determineThemeColor("dark", theme, color);
  const numericalSize = parseInt(size, 10);

  return (
    <div
      className={`p-1 rounded-lg ${theme === "light" ? "bg-gradient-to-t" : "bg-gradient-to-b"} ${t("from-neutral-900")} ${className ?? ""}`}
      style={{ width: numericalSize, height: numericalSize }}
    >
      <div
        className={`flex items-center justify-center rounded-lg ${t("bg-neutral-1100")}`}
        style={{ height: numericalSize - 2 }}
      >
        <Icon size={`${numericalSize - 12}`} {...iconProps} />
      </div>
    </div>
  );
};

export default EncapsulatedIcon;
