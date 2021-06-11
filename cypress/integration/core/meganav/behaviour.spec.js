import {
  PLATFORM_PANEL,
  PLATFORM_PANEL_OPEN_CONTROL,
  WHY_ABLY_PANEL,
  WHY_ABLY_PANEL_OPEN_CONTROL,
  MOBILE_DROPDOWN,
  MOBILE_DROPDOWN_CONTROL,
  MOBILE_PLATFORM_PANEL,
  MOBILE_PLATFORM_PANEL_OPEN_CONTROL,
  MOBILE_PLATFORM_PANEL_CLOSE_CONTROL,
  OUTSIDE_MEGANAV,
} from "./shared";

describe("Opening panels on desktop", () => {
  const sharedSpecs = () => {
    it("opens the correct panel when a control is hovered over and closes it on leave", () => {
      cy.get(PLATFORM_PANEL).should("not.be.visible");

      cy.get(PLATFORM_PANEL_OPEN_CONTROL).trigger("mouseenter");
      cy.get(PLATFORM_PANEL).should("be.visible");

      cy.get(PLATFORM_PANEL_OPEN_CONTROL).trigger("mouseleave");
      cy.get(PLATFORM_PANEL).should("not.be.visible");
    });

    it("opens the correct panel when a control is clicked", () => {
      cy.get(PLATFORM_PANEL).should("not.be.visible");

      cy.get(PLATFORM_PANEL_OPEN_CONTROL).trigger("click");
      cy.get(PLATFORM_PANEL).should("be.visible");
    });

    it("keeps the panel open after a control is clicked and does not open other panels of hover", () => {
      cy.get(PLATFORM_PANEL).should("not.be.visible");

      cy.get(PLATFORM_PANEL_OPEN_CONTROL).trigger("click").focus();
      cy.get(PLATFORM_PANEL).should("be.visible");
      cy.get(WHY_ABLY_PANEL).should("not.be.visible");

      cy.get(WHY_ABLY_PANEL_OPEN_CONTROL).trigger("mouseenter");
      cy.get(WHY_ABLY_PANEL).should("not.be.visible");
    });

    it("closes all panels when clicked outside the nav", () => {
      cy.get(PLATFORM_PANEL).should("not.be.visible");

      cy.get(PLATFORM_PANEL_OPEN_CONTROL).trigger("click").focus();
      cy.get(PLATFORM_PANEL).should("be.visible");

      // We force a click because body has no height and Cypress tries to click on the open nav instead
      cy.get(OUTSIDE_MEGANAV).trigger("click", { force: true });
      cy.get(PLATFORM_PANEL).should("not.be.visible");
    });
  };

  beforeEach("set viewport", () => {
    cy.viewport("macbook-15");
  });

  describe("react", () => {
    beforeEach(() => {
      cy.visit("/components/meganav");
    });

    sharedSpecs();
  });

  describe("vw", () => {
    beforeEach(() => {
      cy.visit("/components/meganav?framework=vw");
    });

    sharedSpecs();
  });
});

describe("Opening panels on mobile", () => {
  const sharedSpecs = () => {
    it("toggles the mobile dropdown", () => {
      cy.get(MOBILE_DROPDOWN).should("not.be.visible");
      cy.get(MOBILE_DROPDOWN_CONTROL).trigger("click");
      cy.get(MOBILE_DROPDOWN).should("be.visible");
      cy.get(MOBILE_DROPDOWN_CONTROL).trigger("click");
      cy.get(MOBILE_DROPDOWN).should("not.be.visible");
    });

    it("shows and closes inner panel", () => {
      cy.get(MOBILE_DROPDOWN).should("not.be.visible");
      cy.get(MOBILE_DROPDOWN_CONTROL).trigger("click");
      cy.get(MOBILE_DROPDOWN).should("be.visible");

      cy.get(MOBILE_PLATFORM_PANEL).should("not.be.visible");
      cy.get(MOBILE_PLATFORM_PANEL_OPEN_CONTROL).trigger("click");
      cy.get(MOBILE_PLATFORM_PANEL).should("be.visible");
      cy.get(MOBILE_PLATFORM_PANEL_CLOSE_CONTROL).trigger("click");
      cy.get(MOBILE_PLATFORM_PANEL).should("not.be.visible");
    });
  };

  beforeEach("set viewport", () => {
    cy.viewport("iphone-8");
  });

  describe("react", () => {
    beforeEach(() => {
      cy.visit("/components/meganav");
    });

    sharedSpecs();
  });

  describe("vw", () => {
    beforeEach(() => {
      cy.visit("/components/meganav?framework=vw");
    });

    sharedSpecs();
  });
});
