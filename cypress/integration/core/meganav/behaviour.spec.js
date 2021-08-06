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
  NOTICE,
  mockContent,
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

describe("Meganav options", () => {
  describe("react", () => {
    beforeEach(() => {
      cy.visit("/components/meganav");
    });

    it("uses a custom login link", () => {
      cy.viewport("macbook-15");

      cy.contains("Login").invoke("attr", "href").should("eq", "/login");

      cy.visit("/components/meganav?custom-login-link=true");

      cy.contains("Login")
        .invoke("attr", "href")
        .should("eq", "/custom-login-link");
    });

    it("uses a custom login link on mobile", () => {
      cy.viewport("iphone-8");

      cy.get("[data-id='meganav-items-mobile']")
        .contains("Login")
        .invoke("attr", "href")
        .should("eq", "/login");

      cy.visit("/components/meganav?custom-login-link=true");

      cy.get("[data-id='meganav-items-mobile']")
        .contains("Login")
        .invoke("attr", "href")
        .should("eq", "/custom-login-link");
    });
  });

  describe("vw", () => {
    beforeEach(() => {
      cy.visit("/components/meganav?framework=vw");
    });

    it("uses a custom login link", () => {
      cy.viewport("macbook-15");

      cy.contains("Login").invoke("attr", "href").should("eq", "/login");

      cy.visit("/components/meganav?framework=vw&custom-login-link=true");

      cy.contains("Login")
        .invoke("attr", "href")
        .should("eq", "/custom-login-link");
    });

    it("uses a custom login link on mobile", () => {
      cy.viewport("iphone-8");

      cy.get("[data-id='meganav-items-mobile']")
        .contains("Login")
        .invoke("attr", "href")
        .should("eq", "/login");

      cy.visit("/components/meganav?framework=vw&custom-login-link=true");

      cy.get("[data-id='meganav-items-mobile']")
        .contains("Login")
        .invoke("attr", "href")
        .should("eq", "/custom-login-link");
    });
  });
});

describe("Notice", () => {
  const sharedSpecs = () => {
    it("collapses after scrolling down", () => {
      cy.get(NOTICE).should("be.visible");
      cy.scrollTo(0, 100);
      cy.get(NOTICE).should("not.be.visible");
    });

    it("closes after clicking the close button", () => {
      cy.get(NOTICE).should("be.visible");
      cy.get(NOTICE).within(() => cy.get("button").trigger("click"));
      cy.get(NOTICE).should("not.be.visible");
    });

    it("does not appear after closing and second visit", () => {
      cy.get(NOTICE).should("be.visible");
      cy.get(NOTICE).within(() => cy.get("button").trigger("click"));
      cy.get(NOTICE).should("not.be.visible");

      cy.reload();

      cy.get(NOTICE).should("not.be.visible");
    });

    it("does not display on smaller viewports", () => {
      cy.viewport("ipad-2");
      cy.get(NOTICE).should("not.be.visible");
    });

    it("does not display on smaller viewports after resize", () => {
      cy.viewport("macbook-13");
      cy.get(NOTICE).should("be.visible");
      cy.viewport("ipad-2");
      cy.get(NOTICE).should("not.be.visible");
    });
  };

  const sharedNonDefaultsSpecs = (url) => {
    it("does not display the close btn", () => {
      cy.visit(`${url}&notice-close-btn=false`);
      cy.get(NOTICE).should("be.visible");
      cy.get(NOTICE).within(() => cy.get("button").should("not.exist"));
    });

    it("does not collapse on scroll", () => {
      cy.visit(`${url}&collapse=false`);
      cy.document().then((document) => {
        document.body.append(mockContent(document));
      });
      cy.get(NOTICE).should("be.visible");
      cy.scrollTo(0, 100);
      cy.get(NOTICE).should("be.visible");
    });
  };

  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  describe("react", () => {
    describe("with defaults", () => {
      beforeEach(() => {
        cy.visit("/components/meganav");
        cy.document().then((document) => {
          document.body.append(mockContent(document));
        });
      });

      sharedSpecs();
    });

    sharedNonDefaultsSpecs("/components/meganav?framework=react");
  });

  describe("vw", () => {
    describe("with defaults", () => {
      beforeEach(() => {
        cy.visit("/components/meganav?framework=vw");
        cy.document().then((document) => {
          document.body.append(mockContent(document));
        });
      });

      sharedSpecs();
    });

    sharedNonDefaultsSpecs("/components/meganav?framwork=vw");
  });
});
