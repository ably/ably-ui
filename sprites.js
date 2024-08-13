const path = require("path");
const fs = require("fs");
const svgSprite = require("svg-sprite");

// Configuration for svg-sprite
const config = {
  dest: "dist/core",
  mode: {
    symbol: {
      inline: true,
      sprite: "../sprites",
    },
  },
  shape: {
    id: {
      generator: "sprite-%s",
    },
  },
  svg: {
    transform: [
      function (svg) {
        let globalDefs = "";

        return svg
          .replace(/<defs>(.+?)<\/defs>/g, (_match, def) => {
            globalDefs += def;
          })
          .replace("<symbol", `<defs>${globalDefs}</defs><symbol`);
      },
    ],
  },
};

// Create a new SVG sprite instance
const sprite = new svgSprite(config);

// Directory where your individual SVG files are located
const svgDir = path.resolve(__dirname, "src/core/icons");

// Read all SVG files from the directory and add them to the sprite
fs.readdirSync(svgDir).forEach((file) => {
  if (file.endsWith(".svg")) {
    sprite.add(
      path.resolve(svgDir, file),
      null,
      fs.readFileSync(path.resolve(svgDir, file), "utf-8"),
    );
  }
});

// Compile the sprite
sprite.compile((err, result) => {
  if (err) {
    console.error("Error generating SVG sprite:", err);
  } else {
    // Write the compiled sprite to the destination directory
    fs.mkdirSync(path.resolve(__dirname, "dist/core"), { recursive: true });
    fs.writeFileSync(
      path.resolve(__dirname, "dist", result.symbol.sprite.path),
      result.symbol.sprite.contents,
    );
    console.log("SVG sprite generated successfully!");
  }
});
