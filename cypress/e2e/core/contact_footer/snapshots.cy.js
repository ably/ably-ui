import { fixSnapshotSpec } from "../../../support";

beforeEach(fixSnapshotSpec(__filename));

describe("Chat button state", () => {
  const url = "/components/contact-footer";
  const sharedSpecs = (url) => {
    beforeEach(() => {
      cy.visit(url);
    });

    it("the button is inactive without Hubspot widget", () => {
      cy.get("[data-id='open-chat-widget']").toMatchSnapshot();
    });
  };

  beforeEach(() => {
    cy.viewport("macbook-16");
  });

  describe("react", () => {
    sharedSpecs(url);
  });

  describe("vw", () => {
    sharedSpecs(`${url}?iframework=vw`);
  });
});
