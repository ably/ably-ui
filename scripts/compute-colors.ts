import fs from "fs";
import path from "path";
import { invertTailwindClassVariant } from "../src/core/styles/colors/utils";
import { colors, prefixes, variants } from "../src/core/styles/colors/types";

const directoryPath = path.join(__dirname, "../src");
const outputPath = path.join(
  __dirname,
  "../src/core/styles/colors",
  "computed-colors.json",
);

const joinedVariants = variants.join("|");
const joinedPrefixes = prefixes.join("|");
const joinedColors = colors.join("|");
const regex = new RegExp(
  `themeColor\\("((${joinedVariants}${joinedPrefixes})-(${joinedColors})-(000|[1-9]00|1[0-3]00))"\\)`,
  "g",
);

const findStringInFiles = (dir: string) => {
  const results: string[] = [];

  const readDirectory = (dir: string) => {
    let files: string[];
    try {
      files = fs.readdirSync(dir);
    } catch (error) {
      console.error(`Error reading directory ${dir}:`, error);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      let stat;
      try {
        stat = fs.statSync(filePath);
      } catch (error) {
        console.error(`Error accessing ${filePath}:`, error);
        return;
      }

      if (stat.isDirectory()) {
        readDirectory(filePath);
      } else if (filePath.endsWith(".tsx")) {
        let content = "";
        try {
          content = fs.readFileSync(filePath, "utf-8");
          const matches = [...content.matchAll(regex)].map((match) => match[1]);

          if (matches.length > 0) {
            results.push(...matches);
          }
        } catch (error) {
          console.error(`Error reading file ${filePath}:`, error);
          return;
        }
      }
    });
  };

  readDirectory(dir);
  return Array.from(new Set(results)).sort();
};

const matches = findStringInFiles(directoryPath);

const flippedMatches = matches.map((match) =>
  invertTailwindClassVariant(match),
);

try {
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  fs.writeFileSync(outputPath, JSON.stringify(flippedMatches));
  console.log(
    `🎨 Tailwind theme classes have been computed and written to JSON files.`,
  );
} catch (error) {
  console.error(`Error persisting computed colors:`, error);
}
