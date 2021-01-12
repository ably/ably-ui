const path = require("path");
const fs = require("fs");
const snakeCase = require("change-case").snakeCase;

const modules = require("../modules-config");

const extPredicate = (extRegex) => (path) => path.match(extRegex);
const rubyPredicate = extPredicate(/(.rb|.erb)$/);
const assetsPredicate = extPredicate(/(.js|.css|.js.map|.css.map)$/);
const dataPredicate = extPredicate(/(.json)$/);

const printDone = () => console.log("\x1b[32m%s\x1b[0m", "Done"); // green
const colorizeMod = (name) => `\x1b[33m${name}\x1b[0m`; // yellow
const colorizeComponentName = (name) => `\x1b[35m${name}\x1b[0m`; //magenta

const copyFromTo = (from, to) => (filename) =>
  fs.copyFileSync(path.join(from, filename), path.join(to, filename));

const findFiles = (dir, predicate) => fs.readdirSync(dir).filter(predicate);

const srcPathResolve = (moduleDir, component = "") =>
  path.join("src", moduleDir, component);

const npmPathResolve = (moduleDir, component = "") =>
  path.join(moduleDir, component);

const rubyPathResolve = (moduleDir, component = "", transformCase = true) =>
  path.join(
    "lib",
    "ably_ui",
    moduleDir,
    transformCase ? snakeCase(component) : component
  );

const print = (msg, exec) => (...args) => {
  process.stdout.write(msg(...args));

  if (exec(...args)) {
    return;
  }

  printDone();
};

const copyRubyModuleConfig = print(
  (mod) => `> Copying ruby module files for ${colorizeMod(mod.name)} ... `,
  (mod) => {
    const rubyPath = rubyPathResolve(mod.directory);
    const srcPath = srcPathResolve(mod.directory);

    findFiles(srcPath, rubyPredicate).forEach(copyFromTo(srcPath, rubyPath));
  }
);

const copyCompiledModuleAssets = print(
  (mod) => `> Copying compiled module assets for ${colorizeMod(mod.name)} ... `,
  (mod) => {
    const rubyPath = rubyPathResolve(mod.directory);
    const npmPath = npmPathResolve(mod.directory);

    findFiles(npmPath, assetsPredicate).forEach(copyFromTo(npmPath, rubyPath));
  }
);

const copyCompiledComponentAssets = print(
  (mod, componentName) =>
    `> Copying compiled component assets for ${colorizeComponentName(
      componentName
    )} in module ${colorizeMod(mod.name)} ... `,
  (mod, componentName) => {
    const rubyPath = rubyPathResolve(mod.directory, componentName);
    const npmPath = npmPathResolve(mod.directory, componentName);

    findFiles(npmPath, assetsPredicate).forEach(copyFromTo(npmPath, rubyPath));
  }
);

const copyComponentTemplates = print(
  (mod, componentName) =>
    `> Copying component templates for ${colorizeComponentName(
      componentName
    )} in module ${colorizeMod(mod.name)} ... `,
  (mod, componentName) => {
    const rubyPath = rubyPathResolve(mod.directory, componentName);
    const srcPath = srcPathResolve(mod.directory, componentName);

    findFiles(srcPath, rubyPredicate).forEach(copyFromTo(srcPath, rubyPath));
  }
);

const copyFonts = print(
  (mod) => `> Copying fonts for ${colorizeMod(mod.name)} ... `,
  (mod) => {
    const fonts = srcPathResolve(mod.directory, "fonts");
    const rubyPath = rubyPathResolve(mod.directory, "fonts", false);
    const npmPath = npmPathResolve(mod.directory, "fonts");

    if (!fs.existsSync(fonts)) {
      console.log("\x1b[32m%s\x1b[0m", "No fonts directory found, skipping"); // green
      return true;
    }

    fs.rmdirSync(rubyPath, { recursive: true });
    fs.rmdirSync(npmPath, { recursive: true });

    fs.mkdirSync(rubyPath);
    fs.mkdirSync(npmPath);

    fs.readdirSync(fonts).forEach((filename) => {
      copyFromTo(fonts, npmPath)(filename);
      copyFromTo(fonts, rubyPath)(filename);
    });
  }
);

const copyImages = print(
  (mod) => `> Copying images for ${colorizeMod(mod.name)} ... `,
  (mod) => {
    const images = srcPathResolve(mod.directory, "images");
    const rubyPath = rubyPathResolve(mod.directory, "images", false);
    const npmPath = npmPathResolve(mod.directory, "images");

    if (!fs.existsSync(images)) {
      console.log("\x1b[32m%s\x1b[0m", "No images directory found, skipping"); // green
      return true;
    }

    fs.rmdirSync(rubyPath, { recursive: true });
    fs.rmdirSync(npmPath, { recursive: true });

    fs.mkdirSync(rubyPath);
    fs.mkdirSync(npmPath);

    fs.readdirSync(images).forEach((filename) => {
      copyFromTo(images, npmPath)(filename);
      copyFromTo(images, rubyPath)(filename);
    });
  }
);

const copyIconSprites = print(
  (mod) => `> Copying icon sprites file for ${colorizeMod(mod.name)} ... `,
  (mod) => {
    const rubyPath = rubyPathResolve(mod.directory);
    const spriteFilename = "sprites.svg";

    if (!fs.existsSync(npmPathResolve(mod.directory, spriteFilename))) {
      console.log("\x1b[32m%s\x1b[0m", "No icon sprites file found, skipping"); // green
      return true;
    }

    copyFromTo(npmPathResolve(mod.directory), rubyPath)(spriteFilename);
  }
);

const copyComponentData = print(
  (mod, componentName) =>
    `> Copying component data for ${colorizeComponentName(
      componentName
    )} in module ${colorizeMod(mod.name)} ... `,
  (mod, componentName) => {
    const rubyPath = rubyPathResolve(mod.directory, componentName);
    const npmPath = npmPathResolve(mod.directory, componentName);
    const srcPath = srcPathResolve(mod.directory, componentName);

    findFiles(srcPath, dataPredicate).forEach((filename) => {
      copyFromTo(srcPath, npmPath)(filename);
      copyFromTo(srcPath, rubyPath)(filename);
    });
  }
);

const createGitignoreFiles = (mod) => {
  process.stdout.write(
    `> Creating .gitignore file for ${colorizeMod(mod.name)} ... `
  );

  fs.writeFileSync(npmPathResolve(mod.directory, ".gitignore"), "*");
  fs.writeFileSync(rubyPathResolve(mod.directory, ".gitignore", false), "*");

  printDone();
};

const sync = () => {
  console.log("");

  modules.forEach((mod) => {
    const rubyPath = rubyPathResolve(mod.directory);

    fs.rmdirSync(rubyPath, { recursive: true });
    fs.mkdirSync(rubyPath);

    copyRubyModuleConfig(mod);
    copyCompiledModuleAssets(mod);
    copyFonts(mod);
    copyImages(mod);
    copyIconSprites(mod);
    createGitignoreFiles(mod);

    mod.components.forEach((componentName) => {
      fs.mkdirSync(rubyPathResolve(mod.directory, componentName));

      copyComponentTemplates(mod, componentName);
      copyCompiledComponentAssets(mod, componentName);
      copyComponentData(mod, componentName);
    });
  });
};

module.exports = sync;
