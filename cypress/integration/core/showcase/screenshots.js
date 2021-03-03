import { fixSnapshotSpec } from "../../../support";

beforeEach(fixSnapshotSpec(__filename));

describe.skip("Showcase", () => {
  beforeEach(() => {
    cy.viewport("macbook-16");
    cy.visit("/components/showcase?framework=vw");
  });

  it("looks as per design in a wide container", () => {
    cy.get("[data-id='showcase']").first().toMatchImageSnapshot();
  });

  it("looks as per design in a narrow container", () => {
    cy.get("[data-id='showcase']").last().toMatchImageSnapshot();
  });
});
