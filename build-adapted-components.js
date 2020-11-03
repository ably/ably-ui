const extractReactComponents = require("html-to-react-components");
const path = require("path");
const fs = require("fs");
const snakeCase = require("change-case").snakeCase;
const capitalCase = require("change-case").capitalCase;

const modules = ["core"];
const htmlTemplate = "component.html";

const rubyPath = path.join("lib", "ably_ui");

const findAllComponentFiles = (
  root,
  files = fs.readdirSync(root),
  result = []
) => {
  files.forEach((file) => {
    const filepath = path.join(root, file);

    if (fs.statSync(filepath).isDirectory()) {
      result = findAllComponentFiles(
        filepath,
        fs.readdirSync(filepath),
        result
      );
    } else if (path.basename(file) == htmlTemplate) {
      result.push(filepath);
    }
  });

  return result;
};

const componentNameFromPath = (componentPath) => {
  const pathTokens = componentPath.split(path.sep);
  return pathTokens[pathTokens.length - 1];
};

const rubyComponentTemplate = (moduleName, componentName) => `module AblyUi
  module ${capitalCase(moduleName)}
    class ${componentName} < ViewComponent::Base
    end
  end
end`;

const rubyModuleTemplate = (moduleName) => `module AblyUi
  module ${capitalCase(moduleName)}
  end
end\n\n`;

const createNpmModuleDir = (moduleName) => {
  fs.rmdirSync(moduleName, { recursive: true });
  fs.mkdirSync(path.join(moduleName, "components"), { recursive: true });
};

const createRubyModuleDir = (snakeCaseModuleName) => {
  const rubyModulePath = path.join(rubyPath, snakeCaseModuleName);
  fs.rmdirSync(rubyModulePath, { recursive: true });
  fs.mkdirSync(rubyModulePath, { recursive: true });
};

modules.forEach((moduleName) => {
  const snakeCaseModuleName = snakeCase(moduleName);

  createNpmModuleDir(moduleName);
  createRubyModuleDir(snakeCaseModuleName);

  // Open files for writing that will be indexes for components
  const reactComponentIndex = fs.createWriteStream(
    path.join(moduleName, "components", "react.js")
  );
  const rubyComponentIndex = fs.createWriteStream(
    path.join(rubyPath, snakeCaseModuleName, "components.rb"),
    { flags: "a" }
  );
  rubyComponentIndex.write(rubyModuleTemplate(snakeCaseModuleName));

  // Find all component.html files
  const componentsHTML = findAllComponentFiles(`src/${moduleName}`);

  const createRubyComponent = (filepath) => {
    const componentName = componentNameFromPath(path.dirname(filepath));
    const snakeCaseComponentName = snakeCase(componentName);
    const rubyComponentPath = path.join(
      rubyPath,
      snakeCaseModuleName,
      snakeCaseComponentName
    );

    fs.mkdirSync(rubyComponentPath);
    fs.copyFileSync(
      filepath,
      path.join(rubyComponentPath, "component.html.erb")
    );
    fs.writeFileSync(
      path.join(rubyComponentPath, "component.rb"),
      rubyComponentTemplate(moduleName, componentName)
    );
    rubyComponentIndex.write(
      `require "ably_ui/${snakeCaseModuleName}/${snakeCaseComponentName}/component"`
    );
  };

  const createReactComponent = (filepath) => {
    const componentPath = path.dirname(filepath);
    const componentName = componentNameFromPath(componentPath);
    const componentFile = fs.readFileSync(filepath, "utf8");
    const reactTemplate = "component.jsx";

    const reactComponentPath = componentPath.replace("src", ".");
    extractReactComponents(componentFile, {
      componentType: "stateless",
      output: { fileExtension: "jsx", path: reactComponentPath },
    });
    fs.rename(
      reactComponentPath + "/" + componentName + ".jsx",
      reactComponentPath + "/" + reactTemplate,
      (err) => err && console.log("ERROR: " + err)
    );
    reactComponentIndex.write(
      `export { default as ${componentName} } from './${componentName}/${reactTemplate}';\n`
    );
  };

  componentsHTML.forEach((filepath) => {
    createReactComponent(filepath);
    createRubyComponent(filepath);
  });

  reactComponentIndex.end();
  rubyComponentIndex.end();
});
