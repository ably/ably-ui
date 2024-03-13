import { fixSnapshotSpec } from "../../../support";

beforeEach(fixSnapshotSpec(__filename));

describe("Chat button state", () => {
  beforeEach(() => {
    cy.visit("/components/contact-footer");
  });

  it("the button is inactive without Hubspot widget", () => {
    cy.get("[data-id='open-chat-widget']").toMatchSnapshot();
  });
});
