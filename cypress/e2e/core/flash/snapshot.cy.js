import { fixSnapshotSpec } from "../../../support";

beforeEach(fixSnapshotSpec(__filename));

describe("Flash Snapshot Test", () => {
  beforeEach(() => {
    cy.visit("/components/flash");
    cy.viewport("macbook-16");
  });

  // Flaky
  // it("renders correcty", () => {
  //   cy.get('[data-id="ui-flashes"]');
  //   const flashId = "[data-id='ui-flash']";
  //   cy.get(flashId).eq(0).toMatchSnapshot();
  //   cy.get(flashId).eq(1).toMatchSnapshot();
  //   cy.get(flashId).eq(2).toMatchSnapshot();
  //   cy.get(flashId).eq(3).toMatchSnapshot();
  //   cy.get(flashId).eq(4).toMatchSnapshot();
  // });
});
