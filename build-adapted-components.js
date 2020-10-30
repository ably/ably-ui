const extractReactComponents = require("html-to-react-components");
const path = require("path");
const fs = require('fs');
const snakeCase = require('change-case').snakeCase;
const capitalCase = require('change-case').capitalCase;

const modules = ['core'];
const htmlTemplate = 'component.html';

const railsPath = path.join('lib', 'ably_ui');

const findAllComponentFiles = (root, files = fs.readdirSync(root), result = []) => {
  files.forEach((file) => {
    const filepath = path.join(root, file);

    if (fs.statSync(filepath).isDirectory()) {
      result = findAllComponentFiles(filepath, fs.readdirSync(filepath), result);
    } else if (path.basename(file) == htmlTemplate) {
      result.push(filepath);
    }
  });

  return result;
}

const componentNameFromPath = (componentPath) => {
  const pathTokens = componentPath.split(path.sep);
  return pathTokens[pathTokens.length - 1];
}

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
  fs.mkdirSync(path.join(moduleName, 'components'), { recursive: true });
}

const createRailsModuleDir = (snakeCaseModuleName) => {
  const railsModulePath = path.join(railsPath, snakeCaseModuleName);
  fs.rmdirSync(railsModulePath, { recursive: true });
  fs.mkdirSync(railsModulePath, { recursive: true });

}

modules.forEach(moduleName => {
  const snakeCaseModuleName = snakeCase(moduleName);

  createNpmModuleDir(moduleName);
  createRailsModuleDir(snakeCaseModuleName);

  // Open files for writing that will be indexes for components
  const reactComponentIndex = fs.createWriteStream(path.join(moduleName, 'components', 'react.js'));
  const railsComponentIndex = fs.createWriteStream(path.join(railsPath, snakeCaseModuleName, 'components.rb'), { flags: 'a' });
  railsComponentIndex.write(rubyModuleTemplate(moduleName));

  // Find all component.html files
  const componentsHTML = findAllComponentFiles(`src/${moduleName}`);

  const createRailsComponent = (filepath) => {
    const componentName = componentNameFromPath(path.dirname(filepath));
    const railsComponentPath = path.join(railsPath, snakeCaseModuleName, snakeCase(componentName));

    fs.mkdirSync(railsComponentPath);
    fs.copyFileSync(filepath, path.join(railsComponentPath, 'component.html.erb'));
    fs.writeFileSync(path.join(railsComponentPath, 'component.rb'), rubyComponentTemplate(moduleName, componentName));
    railsComponentIndex.write(`require "ably_ui/${snakeCaseModuleName}/${componentName}/component"`);
  }

  const createReactComponent = (filepath) => {
    const componentPath = path.dirname(filepath);
    const componentName = componentNameFromPath(componentPath);
    const componentFile = fs.readFileSync(filepath, 'utf8');
    const reactTemplate = 'component.jsx';

    const reactComponentPath = componentPath.replace('src', '.')
    extractReactComponents(componentFile, { componentType: 'stateless', output: { fileExtension: 'jsx', path: reactComponentPath } });
    fs.rename(reactComponentPath + '/' + componentName + '.jsx', reactComponentPath + '/' + reactTemplate, (err) => err && console.log('ERROR: ' + err));
    reactComponentIndex.write(`export { default as ${componentName} } from './${componentName}/${reactTemplate}';\n`);
  }

  componentsHTML.forEach(filepath => {
    createReactComponent(filepath);
    createRailsComponent(filepath);
  });

  reactComponentIndex.end();
  railsComponentIndex.end();
});





