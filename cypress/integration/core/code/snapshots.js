
import { fixSnapshotSpec } from "../../../support";

beforeEach(fixSnapshotSpec(__filename));

describe("Code Snapshot Test", () => {
  const url = "/components/code";
  const sharedSpecs = (url) => {
    beforeEach(() => {
      cy.visit(url);
    });

    it("test case common to both", () => {
      cy.get("[data-id='code']").toMatchSnapshot();
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