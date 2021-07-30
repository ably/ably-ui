import { fixSnapshotSpec } from "../../../support";

beforeEach(fixSnapshotSpec(__filename));

describe("Cookie Message Snapshot Test", () => {
  const url = "/components/cookie-message";
  const sharedSpecs = (url) => {
    beforeEach(() => cy.visit(url));

    it("the message component is visible", () => {
      cy.get(".ui-cookie-message").first().toMatchSnapshot();
    });
  };

  beforeEach(() => {
    cy.viewport("macbook-16");
  });

  describe("react", () => {
    sharedSpecs(url);
  });
});
