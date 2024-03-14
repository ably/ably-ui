const path = require("path");
const fs = require("fs");

const modules = require("../modules-config");

const extPredicate = (extRegex) => (path) => path.match(extRegex);
const dataPredicate = extPredicate(/(.json)$/);

let VERBOSE_LOG = false;
const log = (...args) => (VERBOSE_LOG ? console.log(...args) : null);
const printWrite = (...args) =>
  VERBOSE_LOG ? process.stdout.write(...args) : null;
const printDone = () => log("\x1b[32m%s\x1b[0m", "Done"); // green
const colorizeMod = (name) => `\x1b[33m${name}\x1b[0m`; // yellow
const colorizeComponentName = (name) => `\x1b[35m${name}\x1b[0m`; //magenta

const copyFromTo = (from, to) => (filename) =>
  fs.copyFileSync(path.join(from, filename), path.join(to, filename));

const findFiles = (dir, predicate) => fs.readdirSync(dir).filter(predicate);

const srcPathResolve = (moduleDir, component = "") =>
  path.join("src", moduleDir, component);

const npmPathResolve = (moduleDir, component = "") =>
  path.join(moduleDir, component);

const print =
  (msg, exec) =>
  (...args) => {
    printWrite(msg(...args));

    if (exec(...args)) {
      return;
    }

    printDone();
  };

const copyFonts = print(
  (mod) => `> Copying fonts for ${colorizeMod(mod.name)} ... `,
  (mod) => {
    const fonts = srcPathResolve(mod.directory, "fonts");
    const npmPath = npmPathResolve(mod.directory, "fonts");

    if (!fs.existsSync(fonts)) {
      log("\x1b[32m%s\x1b[0m", "No fonts directory found, skipping"); // green
      return true;
    }

    if (fs.existsSync(npmPath)) {
      fs.rmdirSync(npmPath, { recursive: true });
    }

    fs.mkdirSync(npmPath);

    fs.readdirSync(fonts).forEach((filename) => {
      copyFromTo(fonts, npmPath)(filename);
    });
  }
);

const copyImages = print(
  (mod) => `> Copying images for ${colorizeMod(mod.name)} ... `,
  (mod) => {
    const images = srcPathResolve(mod.directory, "images");
    const npmPath = npmPathResolve(mod.directory, "images");

    if (!fs.existsSync(images)) {
      log("\x1b[32m%s\x1b[0m", "No images directory found, skipping"); // green
      return true;
    }

    if (fs.existsSync(npmPath)) {
      fs.rmdirSync(npmPath, { recursive: true });
    }

    fs.mkdirSync(npmPath);

    fs.readdirSync(images).forEach((filename) => {
      copyFromTo(images, npmPath)(filename);
    });
  }
);

const copyComponentData = print(
  (mod, componentName) =>
    `> Copying component data for ${colorizeComponentName(
      componentName
    )} in module ${colorizeMod(mod.name)} ... `,
  (mod, componentName) => {
    const npmPath = npmPathResolve(mod.directory, componentName);
    const srcPath = srcPathResolve(mod.directory, componentName);

    findFiles(srcPath, dataPredicate).forEach((filename) => {
      copyFromTo(srcPath, npmPath)(filename);
    });
  }
);

const createGitignoreFiles = (mod) => {
  printWrite(`> Creating .gitignore file for ${colorizeMod(mod.name)} ... `);

  fs.writeFileSync(npmPathResolve(mod.directory, ".gitignore"), "*");

  printDone();
};

const sync = ({ verbose } = { verbose: false }) => {
  VERBOSE_LOG = verbose;

  log("");

  modules.forEach((mod) => {
    copyFonts(mod);
    copyImages(mod);
    createGitignoreFiles(mod);

    mod.components.forEach((componentName) => {
      copyComponentData(mod, componentName);
    });
  });
};

module.exports = sync;
