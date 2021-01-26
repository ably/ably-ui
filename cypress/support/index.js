// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import "cypress-plugin-snapshots/commands";
import "./commands";

// Cypress has a bug that breaks snapshot tests when running the whole suite
// Follow https://github.com/cypress-io/cypress/issues/3090
// Recommended workaround below:
export const fixSnapshotSpec = (filename) => () => {
  const path = require("path");
  // const relative = filename.substr(1); // removes leading "/"
  const projectRoot = Cypress.config("projectRoot");
  const absolute = path.join(projectRoot, filename);

  Cypress.spec = {
    absolute,
    name: path.basename(filename),
    filename,
  };
};
