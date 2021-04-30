import { fixSnapshotSpec } from "../../../support";

beforeEach(fixSnapshotSpec(__filename));

describe("Code Snapshot Test", () => {
  const url = "/components/code";
  const sharedSpecs = (url) => {
    beforeEach(() => {
      cy.visit(url);
    });

    it("test case common to both", () => {
      cy.get("[data-id='code']").eq(0).toMatchSnapshot();
      cy.get("[data-id='code']").eq(1).toMatchSnapshot();
      cy.get("[data-id='code']").eq(2).toMatchSnapshot();
    });
  };

  beforeEach(() => {
    cy.viewport("macbook-16");
  });

  describe("react", () => {
    sharedSpecs(url);
  });

  describe("view component", () => {
    sharedSpecs(`${url}?iframework=vw`);
  });
});
