import { fixSnapshotSpec } from "../../../support";

beforeEach(fixSnapshotSpec(__filename));

describe("Showcase", () => {
  beforeEach(() => {
    cy.viewport("macbook-16");
    cy.visit("/components/showcase?framework=vw");
  });

  it("the button is inactive without Hubspot widget", () => {
    cy.get("[data-id='showcase']").first().toMatchSnapshot();
  });
});
