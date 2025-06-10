import path from "path";
import fs from "fs";
import svgSprite from "svg-sprite";

// Configuration for svg-sprite
const config = {
  // log: "info",
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
    namespaceClassnames: false, // preserve classnames, useful for Heroicons
    transform: [
      function (svg: string) {
        let globalDefs = "";
        const idMap: Record<string, number> = {};

        return (
          svg
            // Extract and remove global defs, add to cumulative string
            .replace(/<defs>(.+?)<\/defs>/g, (_match: string, def: string) => {
              globalDefs += def;
              return "";
            })
            // If the id has been marked with 'hero' then we append the correct variant suffix depending on
            // how many times we've seen the id before (since each HeroIcon variant has the same file name per icon)
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
            .replace("<symbol", `<defs>${globalDefs}</defs><symbol`)
        );
      },
    ],
  },
};

// Directories where your individual SVG files are located.
const svgDirs = [
  "../src/core/icons/display",
  "../src/core/icons/gui",
  "../src/core/icons/product",
  "../src/core/icons/social",
  "../src/core/icons/tech",
];

// Directories where your individual SVG files are located.
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

// Create new SVG sprite instances for each directory
const sprites = svgDirs.map((dir) => {
  const key = dir.split("/").pop()!;

  return {
    key: dir.split("/").pop()!,
    sprite: new svgSprite(config),
    icon: spriteCliIcons[key],
  };
});

// Object to store the grouped filenames
const iconGroups: Record<string, string[]> = {};

// Function to read and add SVG files from a directory
const processSvgDir = (dirString: string) => {
  const dir = path.resolve(__dirname, dirString);

  fs.readdirSync(dir).forEach((file) => {
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
            return; // Skip files that don't match the pattern
          }
        }

        if (!iconGroups[key]) {
          iconGroups[key] = [];
        }

        if (!iconGroups[key].includes(fileNameWithoutExtension)) {
          iconGroups[key].push(fileNameWithoutExtension);
        }

        if (svgDirs.includes(dirString)) {
          sprites
            .find((sprite) => sprite.key === key)
            ?.sprite.add(
              path.resolve(dir, file),
              null,
              fs.readFileSync(path.resolve(dir, file), "utf-8"),
            );
        }
      } catch (error) {
        console.error(`Error processing file ${file}:`, error);
      }
    }
  });
};

// Process each directory
searchDirs.forEach(processSvgDir);

// Compile the sprite
sprites.forEach((spriteData) => {
  spriteData.sprite.compile((err, result) => {
    if (err) {
      console.error("Error generating SVG sprite:", err);
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

        // Write the icon groups to a JSON file
        const iconJsonPath = path.resolve(
          __dirname,
          `../src/core/Icon/computed-icons/${spriteData.key}-icons.ts`,
        );

        // Create directory if it doesn't exist
        fs.mkdirSync(path.dirname(iconJsonPath), { recursive: true });

        const generatedIconGroups =
          `// AUTOGENERATED BY build:sprites - DO NOT EDIT\n\nexport const ${spriteData.key}Icons = ${JSON.stringify(iconGroups[spriteData.key].sort(), null, 2)}`.replace(
            /]/g,
            "] as const;",
          );

        fs.writeFileSync(iconJsonPath, generatedIconGroups, "utf-8");

        console.log(
          `${spriteData.icon}  ${spriteData.key} icons generated successfully!`,
        );
      } catch (error) {
        console.log("SVG sprite/manifest generation failed:", error);
      }
    }
  });
});
