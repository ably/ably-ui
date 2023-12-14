import { fixSnapshotSpec } from "../../../support";

beforeEach(fixSnapshotSpec(__filename));

describe("Cookie Message Snapshot Test", () => {
  beforeEach(() => {
    cy.viewport("macbook-16");
    cy.visit("/components/cookie-message");
  });

  it("the message component is visible", () => {
    cy.get(".ui-cookie-message").first().toMatchSnapshot();
  });
});
