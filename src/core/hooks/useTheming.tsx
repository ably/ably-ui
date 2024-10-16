import { useCallback } from "react";
import { ColorClass, Theme } from "../styles/colors/types";
import { invertTailwindClassVariant } from "../styles/colors/utils";

type UseThemingProps = {
  baseTheme?: Theme;
  theme?: Theme;
};

const useTheming = ({
  baseTheme = "dark",
  theme = "dark",
}: UseThemingProps) => {
  const themeColor = useCallback(
    (color: ColorClass) =>
      theme === baseTheme ? color : invertTailwindClassVariant(color),
    [baseTheme, theme],
  );

  return {
    themeColor,
  };
};

export default useTheming;
