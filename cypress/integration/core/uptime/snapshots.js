import { fixSnapshotSpec } from "../../../support";

beforeEach(fixSnapshotSpec(__filename));

describe("Uptime Snapshot Test", () => {
  const url = "/components/uptime";
  const sharedSpecs = (url) => {
    beforeEach(() => cy.visit(url));

    it("test case common to both", () => {
      cy.get('[data-id="uptime"]').first().toMatchSnapshot();
      cy.get('[data-id="uptime-error"]').first().toMatchSnapshot();
    });
  };

  beforeEach(() => {
    cy.viewport("macbook-16");
  });

  describe("react", () => {
    sharedSpecs(url);
  });
});
