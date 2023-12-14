import { fixSnapshotSpec } from "../../../support";

beforeEach(fixSnapshotSpec(__filename));

describe("Footer Snapshot Test", () => {
  beforeEach(() => {
    cy.viewport("macbook-16");
    cy.visit("/components/footer");
  });

  it("test case common to both", () => {
    cy.get("[data-id='footer']").toMatchSnapshot();
  });
});
