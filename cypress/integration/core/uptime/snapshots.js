import { fixSnapshotSpec } from "../../../support";

beforeEach(fixSnapshotSpec(__filename));

describe("Uptime Snapshot Test", () => {
  const url = "/components/uptime";
  const sharedSpecs = (url) => {
    beforeEach(() => cy.visit(url));

    it("test case common to both", () => {
      cy.get(".ui-uptime-widget").first().toMatchSnapshot();
      cy.get(".ui-uptime-error").first().toMatchSnapshot();
    });
  };

  beforeEach(() => {
    cy.viewport("macbook-16");
  });

  describe("react", () => {
    sharedSpecs(url);
  });
});
