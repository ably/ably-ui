Cypress.Commands.add(
  "compareComponents",
  ({
    reactComponentUrl,
    viewComponentUrl,
    beforeScreenshot = () => {},
    selector,
    componentName = Cypress.mocha.getRunner().suite.ctx.test.parent.title,
  }) => {
    let reactScreenshotPath = null;
    let vwScreenshotPath = null;

    cy.exec(`mkdir -p cypress/screenshots/component-parity/results`, {
      log: false,
    });

    const diffPath = `cypress/screenshots/component-parity/results/${componentName}.png`;

    // If you are wondering why this isn't Promise.all or async/await have a look at
    // https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Commands-Are-Not-Promises

    cy.visit(reactComponentUrl);

    beforeScreenshot();

    cy.get(selector)
      .screenshot(`${componentName}.react`, {
        onAfterScreenshot: (_, props) => (reactScreenshotPath = props.path),
      })
      .then(() => {
        cy.visit(viewComponentUrl);
        beforeScreenshot();

        cy.get(selector)
          .screenshot(`${componentName}.vw`, {
            onAfterScreenshot: (_, props) => (vwScreenshotPath = props.path),
          })
          .then(() => {
            cy.exec(
              `cypress/support/diff.js ` +
                `--pathA="${reactScreenshotPath}" ` +
                `--pathB="${vwScreenshotPath}" ` +
                `--target="${diffPath}" ` +
                `--threshold="0.005" `
            ).then((result) => {
              cy.exec(`rm "${reactScreenshotPath}" "${vwScreenshotPath}"`, {
                log: false,
              });

              assert.isTrue(result.stdout === "Yay", "Screenshots match");
            });
          });
      });
  }
);
