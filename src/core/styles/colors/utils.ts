import { ColorClass, ComputedColors, Theme } from "./types";

// If missing, run any build script involving build:colors, i.e. yarn storybook
import computedColorsDark from "./computed-colors-dark.json";
import computedColorsLight from "./computed-colors-light.json";

export const convertTailwindClassToVar = (className: string) =>
  className.replace(/(text|bg|from|to)-([a-z0-9-]+)/gi, "var(--color-$2)");

export const determineThemeColor = (
  baseTheme: Theme,
  currentTheme: Theme,
  color: ColorClass,
) => {
  if (baseTheme === currentTheme) {
    return color;
  } else if (baseTheme === "light") {
    return (
      (computedColorsLight as ComputedColors)[color][currentTheme] || color
    );
  } else if (baseTheme === "dark") {
    return (computedColorsDark as ComputedColors)[color][currentTheme] || color;
  }

  return color;
};
