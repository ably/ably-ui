import { ColorClass, ColorClassColorGroups, colorGroupLengths } from "./types";

export const convertTailwindClassToVar = (className: string) =>
  className.replace(/(text|bg|from|to)-([a-z0-9-]+)/gi, "var(--color-$2)");

export const invertTailwindClassVariant = (className: string): ColorClass => {
  const splitMatch = className.split("-");
  if (splitMatch.length < 3) {
    throw new Error("Invalid TW class format");
  }

  const color = splitMatch[splitMatch.length - 2];
  const variant = splitMatch[splitMatch.length - 1];
  const property = splitMatch.slice(0, splitMatch.length - 1).join("-");

  const numericalVariant = Number(variant.slice(0, -2)) ?? 0;
  if (isNaN(numericalVariant)) {
    throw new Error(`Invalid variant value in TW class: ${className}`);
  }

  const flippedVariant =
    colorGroupLengths[color as ColorClassColorGroups] -
    numericalVariant -
    (color === "neutral" ? 1 : -1);
  const flippedMatch = `${property}-${flippedVariant}00`;

  return flippedMatch as ColorClass;
};
