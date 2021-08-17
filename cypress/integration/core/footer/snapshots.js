import { fixSnapshotSpec } from "../../../support";

beforeEach(fixSnapshotSpec(__filename));

describe("Footer Snapshot Test", () => {
  const url = "/components/footer";
  const sharedSpecs = (url) => {
    beforeEach(() => {
      cy.visit(url);
    });

    it("test case common to both", () => {
      cy.get("[data-id='footer']").toMatchSnapshot();
    });
  };

  beforeEach(() => {
    cy.viewport("macbook-16");
  });

  describe("react", () => {
    sharedSpecs(url);
  });

  describe("view component", () => {
    sharedSpecs(`${url}?framework=vw`);
  });
});
