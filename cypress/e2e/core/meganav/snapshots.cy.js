import { fixSnapshotSpec } from "../../../support";
import { MOBILE_DROPDOWN_CONTROL, NOTICE } from "./shared";

beforeEach(fixSnapshotSpec(__filename));

describe("ControlMobileDropdown", () => {
  beforeEach(() => {
    cy.viewport("iphone-8");
    cy.visit("/components/meganav");
  });

  it("renders correctly by default", () => {
    cy.get(MOBILE_DROPDOWN_CONTROL).toMatchSnapshot();
  });

  it("renders correctly on click", () => {
    cy.get(MOBILE_DROPDOWN_CONTROL).trigger("click").toMatchSnapshot();
  });
});

describe("Notice", () => {
  beforeEach(() => {
    cy.viewport("iphone-8");
    cy.visit("/components/meganav");
  });

  it("renders correctly by default", () => {
    cy.get(NOTICE).toMatchSnapshot();
  });
});
