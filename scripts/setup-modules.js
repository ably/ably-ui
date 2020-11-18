const path = require("path");
const fs = require("fs");
const snakeCase = require("change-case").snakeCase;

const modules = require("../modules-config");

const rubyPath = path.join("lib", "ably_ui");
const srcPath = path.join("src");
const extPredicate = (extRegex) => (path) => path.match(extRegex);
const templatesPredicate = extPredicate(/(.rb|.erb)$/);
const assetsPredicate = extPredicate(/(.js|.css|.js.map|.css.map)$/);

const printDone = () => console.log("\x1b[32m%s\x1b[0m", "Done"); // green
const colorizeMod = (name) => `\x1b[33m${name}\x1b[0m`; // yellow
const colorizeComponentName = (name) => `\x1b[35m${name}\x1b[0m`; //magenta

const copyFromTo = (from, to) => (filename) =>
  fs.copyFileSync(path.join(from, filename), path.join(to, filename));

const copyCompiledModuleAssets = (mod) => {
  process.stdout.write(
    `> Copying compiled module assets for ${colorizeMod(mod.name)} ... `
  );

  const moduleCompiledAssets = fs
    .readdirSync(mod.directory)
    .filter(assetsPredicate);

  fs.mkdirSync(path.join(rubyPath, mod.directory));

  moduleCompiledAssets.forEach(
    copyFromTo(mod.directory, path.join(rubyPath, mod.directory))
  );

  printDone();
};

const copyCompiledComponentAssets = (mod, componentName) => {
  process.stdout.write(
    `> Copying compiled component assets for ${colorizeComponentName(
      componentName
    )} in module ${colorizeMod(mod.name)} ... `
  );

  const compiledAssets = fs
    .readdirSync(path.join(mod.directory, componentName))
    .filter(assetsPredicate);

  compiledAssets.forEach(
    copyFromTo(
      path.join(mod.directory, componentName),
      path.join(rubyPath, mod.directory, snakeCase(componentName))
    )
  );

  printDone();
};

const copyComponentTemplates = (mod, componentName) => {
  process.stdout.write(
    `> Copying component templates for ${colorizeComponentName(
      componentName
    )} in module ${colorizeMod(mod.name)} ... `
  );

  const templates = fs
    .readdirSync(path.join(srcPath, mod.directory, componentName))
    .filter(templatesPredicate);

  fs.mkdirSync(path.join(rubyPath, mod.directory, snakeCase(componentName)));

  templates.forEach(
    copyFromTo(
      path.join(srcPath, mod.directory, componentName),
      path.join(rubyPath, mod.directory, snakeCase(componentName))
    )
  );

  printDone();
};

// TODO: we don't need to do this on every compile as they don't change as much but for now it's fast anyway
const copyFonts = (mod) => {
  process.stdout.write(`> Copying fonts for ${colorizeMod(mod.name)} ... `);

  const fontsPath = path.join(srcPath, mod.directory, "fonts");
  const gemFontsPath = path.join(rubyPath, mod.directory, "fonts");
  const npmFontsPath = path.join(mod.directory, "fonts");

  if (!fs.existsSync(fontsPath)) {
    console.log("\x1b[32m%s\x1b[0m", "No fonts directory found, skipping"); // green
    return;
  }

  const fonts = fs.readdirSync(fontsPath);

  fs.rmdirSync(gemFontsPath, { recursive: true });
  fs.rmdirSync(npmFontsPath, { recursive: true });

  fs.mkdirSync(gemFontsPath);
  fs.mkdirSync(npmFontsPath);

  fonts.forEach((filename) => {
    copyFromTo(fontsPath, npmFontsPath)(filename);
    copyFromTo(fontsPath, gemFontsPath)(filename);
  });

  printDone();
};

const createGitignoreFiles = (mod) => {
  process.stdout.write(
    `> Creating .gitignore file for ${colorizeMod(mod.name)} ... `
  );

  fs.writeFileSync(path.join(mod.directory, ".gitignore"), "*");
  fs.writeFileSync(path.join(rubyPath, mod.directory, ".gitignore"), "*");

  printDone();
};

const sync = () => {
  console.log("");

  modules.forEach((mod) => {
    fs.rmdirSync(path.join(rubyPath, mod.directory), { recursive: true });

    copyCompiledModuleAssets(mod);
    copyFonts(mod);
    createGitignoreFiles(mod);

    mod.components.forEach((componentName) => {
      copyComponentTemplates(mod, componentName);
      copyCompiledComponentAssets(mod, componentName);
    });
  });
};

module.exports = sync;
