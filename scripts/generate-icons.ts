import path from "path";
import fs from "fs";
import svgSprite from "svg-sprite";
import { transform } from "@svgr/core";

// Configuration for svg-sprite
const spriteConfig = {
  dest: "dist/core",
  mode: {
    symbol: {
      inline: true,
      sprite: "../sprites",
    },
  },
  shape: {
    id: {
      generator: (filename: string) => {
        const nameWithoutExtension = filename.replace(".svg", "");
        return nameWithoutExtension.startsWith("icon-")
          ? `sprite-${nameWithoutExtension}`
          : `hero-sprite-icon-gui-${nameWithoutExtension}`;
      },
    },
  },
  svg: {
    namespaceClassnames: false,
    transform: [
      function (svg: string) {
        let globalDefs = "";
        const idMap: Record<string, number> = {};

        return svg
          .replace(/<defs>(.+?)<\/defs>/g, (_match: string, def: string) => {
            globalDefs += def;
            return "";
          })
          .replace(/id="hero-([^"]+)"/g, (match: string, id: string) => {
            if (idMap[id] === 1) {
              idMap[id]++;
              return `id="${id}-solid"`;
            } else if (idMap[id] === 2) {
              idMap[id]++;
              return `id="${id}-mini"`;
            } else if (idMap[id] === 3) {
              idMap[id]++;
              return `id="${id}-micro"`;
            } else {
              idMap[id] = 1;
              return `id="${id}-outline"`;
            }
          })
          .replace("<symbol", `<defs>${globalDefs}</defs><symbol`);
      },
    ],
  },
};

// Directories where SVG files are located
const svgDirs = [
  "../src/core/icons/display",
  "../src/core/icons/gui",
  "../src/core/icons/product",
  "../src/core/icons/social",
  "../src/core/icons/tech",
];

const searchDirs = [
  ...svgDirs,
  "../node_modules/heroicons/24/outline",
  "../node_modules/heroicons/24/solid",
  "../node_modules/heroicons/20/solid",
  "../node_modules/heroicons/16/solid",
];

const spriteCliIcons = {
  display: "📺",
  gui: "🖼️",
  product: "💻",
  social: "💬",
  tech: "🔧",
};

// Object to store the grouped filenames
const iconGroups: Record<string, string[]> = {};

// Create new SVG sprite instances for each directory
const sprites = svgDirs.map((dir) => {
  const key = dir.split("/").pop()!;
  return {
    key,
    sprite: new svgSprite(spriteConfig),
    icon: spriteCliIcons[key],
  };
});

// Function to convert SVG to React component
async function convertSvgToComponent(
  svgContent: string,
  componentName: string,
) {
  const jsCode = await transform(
    svgContent,
    {
      plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
      typescript: true,
      ref: true,
      titleProp: true,
      svgo: true,
      svgoConfig: {
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    },
    { componentName },
  );

  return jsCode;
}

// Function to sanitize component name
function sanitizeComponentName(name: string): string {
  return name
    .replace(/[^a-zA-Z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

// Function to process SVG files from a directory
async function processSvgDir(dirString: string) {
  const dir = path.resolve(__dirname, dirString);

  for (const file of fs.readdirSync(dir)) {
    if (file.endsWith(".svg")) {
      try {
        // Extract the key from the filename
        let key: string;
        let fileNameWithoutExtension: string;

        if (dir.includes("heroicons")) {
          key = "gui";

          if (dir.includes("24/solid")) {
            fileNameWithoutExtension = `icon-gui-${file.replace(".svg", "")}-solid`;
          } else if (dir.includes("20/solid")) {
            fileNameWithoutExtension = `icon-gui-${file.replace(".svg", "")}-mini`;
          } else if (dir.includes("16/solid")) {
            fileNameWithoutExtension = `icon-gui-${file.replace(".svg", "")}-micro`;
          } else {
            fileNameWithoutExtension = `icon-gui-${file.replace(".svg", "")}-outline`;
          }
        } else {
          const match = file.match(/^icon-([^-]+)/);
          if (match) {
            key = match[1];
            fileNameWithoutExtension = file.replace(".svg", "");
          } else {
            continue; // Skip files that don't match the pattern
          }
        }

        // Only process local SVG files for iconGroups and components
        // Heroicons will be handled dynamically in the Icon component
        if (svgDirs.includes(dirString)) {
          if (!iconGroups[key]) {
            iconGroups[key] = [];
          }

          if (!iconGroups[key].includes(fileNameWithoutExtension)) {
            iconGroups[key].push(fileNameWithoutExtension);
          }
        }

        // Only process files from our SVG directories
        if (svgDirs.includes(dirString)) {
          const svgContent = fs.readFileSync(path.resolve(dir, file), "utf-8");

          // Add to sprite
          sprites
            .find((sprite) => sprite.key === key)
            ?.sprite.add(path.resolve(dir, file), null, svgContent);

          // Generate React component
          const componentName = sanitizeComponentName(fileNameWithoutExtension)
            .split("-")
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join("");

          const componentCode = await convertSvgToComponent(
            svgContent,
            componentName,
          );

          // Create the output directory if it doesn't exist
          const outputDir = path.resolve(
            __dirname,
            "../src/core/Icon/components",
          );
          fs.mkdirSync(outputDir, { recursive: true });

          // Write the component file
          fs.writeFileSync(
            path.resolve(
              outputDir,
              `${sanitizeComponentName(fileNameWithoutExtension)}.tsx`,
            ),
            componentCode,
            "utf-8",
          );
        }
      } catch (error) {
        console.error(`Error processing file ${file}:`, error);
      }
    }
  }
}

// Main generation function
async function generateIcons() {
  try {
    // Process all directories
    for (const dir of searchDirs) {
      await processSvgDir(dir);
    }

    // Generate sprites
    const spritePromises = sprites.map((spriteData) => {
      return new Promise<void>((resolve, reject) => {
        spriteData.sprite.compile((err, result) => {
          if (err) {
            reject(err);
          } else {
            try {
              // Write the compiled sprite to the destination directory
              fs.mkdirSync(path.resolve(__dirname, "../dist/core"), {
                recursive: true,
              });

              const spritePath = result.symbol.sprite.path.replace(
                ".svg",
                `-${spriteData.key}.svg`,
              );

              fs.writeFileSync(
                path.resolve(__dirname, spritePath),
                result.symbol.sprite.contents,
              );

              resolve();
            } catch (writeError) {
              reject(writeError);
            }
          }
        });
      });
    });

    await Promise.all(spritePromises);

    // Generate React component index file - only include icons that have actual component files
    const outputDir = path.resolve(__dirname, "../src/core/Icon/components");
    const existingFiles = fs
      .readdirSync(outputDir)
      .filter((file) => file.endsWith(".tsx"));

    const indexContent = Object.entries(iconGroups)
      .map(([_key, icons]) => {
        const existingIcons = icons.filter((icon) =>
          existingFiles.includes(`${sanitizeComponentName(icon)}.tsx`),
        );

        if (existingIcons.length === 0) return "";

        const imports = existingIcons
          .map(
            (icon) =>
              `import ${sanitizeComponentName(icon)
                .split("-")
                .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                .join("")} from "./${sanitizeComponentName(icon)}";`,
          )
          .join("\n");

        const exports = existingIcons
          .map(
            (icon) =>
              `${sanitizeComponentName(icon)
                .split("-")
                .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                .join("")},`,
          )
          .join("\n");

        return `${imports}\n\nexport {\n${exports}\n};`;
      })
      .filter((content) => content !== "")
      .join("\n\n");

    fs.writeFileSync(
      path.resolve(__dirname, "../src/core/Icon/components/index.ts"),
      indexContent,
      "utf-8",
    );

    // Generate the icon groups files
    for (const [key, icons] of Object.entries(iconGroups)) {
      const iconJsonPath = path.resolve(
        __dirname,
        `../src/core/Icon/computed-icons/${key}-icons.ts`,
      );

      // Create directory if it doesn't exist
      fs.mkdirSync(path.dirname(iconJsonPath), { recursive: true });

      const generatedIconGroups =
        `// AUTOGENERATED BY generate-icons - DO NOT EDIT\n\nexport const ${key}Icons = ${JSON.stringify(
          icons.sort(),
          null,
          2,
        )}`.replace(/]/g, "] as const;");

      fs.writeFileSync(iconJsonPath, generatedIconGroups, "utf-8");

      console.log(
        `${spriteCliIcons[key]}  ${key} icons generated successfully! (${icons.length} total)`,
      );
    }

    console.log("✅ Icons generation completed successfully!");
  } catch (error) {
    console.error("Error generating icons:", error);
    process.exit(1);
  }
}

// Run the script
generateIcons();
