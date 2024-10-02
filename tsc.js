const fs = require("fs");
const path = require("path");

// Directory containing the .d.ts files
const directoryPath = "./types";

// Path to the index.d.ts file
const indexPath = "./index.d.ts";

// Function to recursively get all .d.ts files
function getDtsFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      // Recursively search in subdirectories
      results = results.concat(getDtsFiles(filePath));
    } else if (file.endsWith(".d.ts") && file !== "index.d.ts") {
      // Add .d.ts file to results
      results.push(filePath);
    }
  });

  return results;
}

// Get all .d.ts files recursively
const dtsFiles = getDtsFiles(directoryPath);

// Add any-type exception to the top, we have a couple of those
fs.writeFileSync(
  indexPath,
  "/* eslint-disable @typescript-eslint/no-explicit-any */\n\n",
  "utf8",
);

// Append the contents of each .d.ts file to index.d.ts
dtsFiles.forEach((file) => {
  let fileContents = fs.readFileSync(file, "utf8");

  // Strip out all "declare"s
  fileContents = fileContents.replace(/declare /g, "");

  // Replace all relative paths with "@ably/ui/core"
  fileContents = fileContents.replace(/\.\/([^"]*)"/g, (_, p1) => {
    return `@ably/ui/core/${p1}"`;
  });

  const absolutePath =
    "@ably/ui/" +
    path
      .relative(directoryPath, file)
      .replace(/\\/g, "/")
      .replace(/\.d\.ts$/, "");

  fs.appendFileSync(
    indexPath,
    `declare module '${absolutePath}' {\n${fileContents}\n}\n\n`,
    "utf8",
  );
});

console.log(
  `🔬 index.d.ts file has been generated with ${dtsFiles.length} exports.`,
);
