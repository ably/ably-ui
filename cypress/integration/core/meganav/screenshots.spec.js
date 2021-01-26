import { fixSnapshotSpec } from "../../../support";
import {
  PLATFORM_PANEL,
  PLATFORM_PANEL_OPEN_CONTROL,
  WHY_ABLY_PANEL,
  WHY_ABLY_PANEL_OPEN_CONTROL,
  USE_CASES_PANEL,
  USE_CASES_PANEL_OPEN_CONTROL,
  DEVELOPERS_PANEL,
  DEVELOPERS_PANEL_OPEN_CONTROL,
} from "./shared";

beforeEach(fixSnapshotSpec(__filename));

describe("Content", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
    cy.visit("/components/meganav");
  });

  describe("Platform", () => {
    it("has the correct content", () => {
      cy.get(PLATFORM_PANEL_OPEN_CONTROL).trigger("click");
      cy.get(PLATFORM_PANEL).toMatchImageSnapshot();
    });
  });

  describe("Why Ably", () => {
    it("has the correct content", () => {
      cy.get(WHY_ABLY_PANEL_OPEN_CONTROL).trigger("click");
      cy.get(WHY_ABLY_PANEL).toMatchImageSnapshot();
    });
  });

  describe("Use cases", () => {
    it("has the correct content", () => {
      cy.get(USE_CASES_PANEL_OPEN_CONTROL).trigger("click");
      cy.get(USE_CASES_PANEL).toMatchImageSnapshot();
    });
  });

  describe("Developers", () => {
    it("has the correct content", () => {
      cy.get(DEVELOPERS_PANEL_OPEN_CONTROL).trigger("click");
      cy.get(DEVELOPERS_PANEL).toMatchImageSnapshot();
    });
  });
});
