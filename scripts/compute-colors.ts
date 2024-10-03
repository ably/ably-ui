import fs from "fs";
import path from "path";
import {
  numericalColors,
  variants,
  prefixes,
  Theme,
  ComputedColors,
} from "../src/core/styles/colors/types";

const computeColors = (base: Theme) => {
  if (base !== "dark" && base !== "light") {
    throw new Error(`Invalid base theme: ${base}. Expected "dark" or "light".`);
  }

  const colors = {} as ComputedColors;

  variants.forEach((variant) =>
    prefixes.forEach((property) =>
      numericalColors.forEach((colorSet) =>
        colorSet.map((color, index) => {
          if (base === "dark") {
            colors[`${variant}${property}-${colorSet[index]}`] = {
              light: `${variant}${property}-${colorSet[colorSet.length - index - 1]}`,
            };
          } else if (base === "light") {
            colors[`${variant}${property}-${colorSet[index]}`] = {
              dark: `${variant}${property}-${colorSet[colorSet.length - index - 1]}`,
            };
          }
        }),
      ),
    ),
  );

  return colors;
};

const darkOutputPath = path.join(
  __dirname,
  "../src/core/styles/colors",
  "computed-colors-dark.json",
);
const lightOutputPath = path.join(
  __dirname,
  "../src/core/styles/colors",
  "computed-colors-light.json",
);

async function writeComputedColors() {
  try {
    await Promise.all([
      fs.promises.writeFile(
        darkOutputPath,
        JSON.stringify(computeColors("dark"), null, 2),
        "utf-8",
      ),
      fs.promises.writeFile(
        lightOutputPath,
        JSON.stringify(computeColors("light"), null, 2),
        "utf-8",
      ),
    ]);
    console.log(
      `🎨 Tailwind theme classes have been computed and written to JSON files.`,
    );
  } catch {
    console.error(`Error persisting computed colors.`);
  }
}

writeComputedColors();
