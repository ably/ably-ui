import { fixSnapshotSpec } from "../../../support";

beforeEach(fixSnapshotSpec(__filename));

describe("Flash Snapshot Test", () => {
  beforeEach(() => {
    cy.visit("/components/dropdown-menu");
    cy.viewport("macbook-16");
  });

  it("renders correcty", () => {
    const dropdownMenuId = "#dropdown-menu";
    cy.get(dropdownMenuId).toMatchSnapshot();
  });
});
