import { fixSnapshotSpec } from "../../../support";

beforeEach(fixSnapshotSpec(__filename));

describe("Showcase", () => {
  beforeEach(() => {
    cy.viewport("macbook-16");
    cy.visit("/components/showcase?framework=vw");
  });

  it("looks as per design in a wide container", () => {
    cy.get("[data-id='showcase']").first().should("be.visible");
    cy.percySnapshot();
  });

  it("looks as per design in a narrow container", () => {
    cy.get("[data-id='showcase']").eq(1).should("be.visible");
    cy.percySnapshot();
  });
});
