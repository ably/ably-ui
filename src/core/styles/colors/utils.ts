import { ColorClass, colorNames, Theme } from "./types";

export const convertTailwindClassToVar = (className: string) =>
  className.replace(/(text|bg)-([a-z0-9-]+)/gi, "var(--color-$2)");

const calculatePaletteRange = (
  acc: { max: number; min: number },
  color: string,
) => {
  const splitColor = color.split("-");
  const numericalColor = Number(splitColor[splitColor.length - 1]);

  return {
    min: acc.min === -1 || numericalColor < acc.min ? numericalColor : acc.min,
    max: acc.max === -1 || numericalColor > acc.max ? numericalColor : acc.max,
  };
};

export const determineThemeColor = (
  baseTheme: Theme,
  currentTheme: Theme,
  color: ColorClass,
) => {
  if (baseTheme === currentTheme) {
    return color;
  } else {
    const splitColor = color.split("-");

    if (splitColor.length === 3) {
      const [property, palette, variant] = splitColor;

      const paletteColors = Object.keys(colorNames).includes(palette)
        ? colorNames[palette as keyof typeof colorNames]
        : colorNames.secondary;

      const { min, max } = paletteColors.reduce(
        (acc, color) => calculatePaletteRange(acc, color),
        {
          min: -1,
          max: -1,
        },
      );

      return `${property}-${palette}-${(max + min - Number(variant)).toString().padStart(3, "0")}` as ColorClass;
    } else {
      return color;
    }
  }
};
