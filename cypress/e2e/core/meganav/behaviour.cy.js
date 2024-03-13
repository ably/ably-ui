import {
  PLATFORM_PANEL,
  PLATFORM_PANEL_OPEN_CONTROL,
  COMPANY,
  COMPANY_OPEN_CONTROL,
  SEARCH_PANEL,
  SEARCH_PANEL_OPEN_CONTROL,
  SEARCH_PANEL_MOBILE_INPUT,
  SEARCH_PANEL_INPUT,
  SEARCH_PANEL_MOBILE_CLEAR,
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
  beforeEach(() => {
    cy.viewport("macbook-15");
    cy.visit("/components/meganav");
  });

  // Flaky
  // it("opens the correct panel when a control is hovered over and closes it on leave", () => {
  //   cy.get(PLATFORM_PANEL).should("not.be.visible");

  //   cy.get(PLATFORM_PANEL_OPEN_CONTROL).trigger("mouseenter");
  //   cy.get(PLATFORM_PANEL).should("be.visible");

  //   cy.get(PLATFORM_PANEL_OPEN_CONTROL).trigger("mouseleave");
  //   cy.get(PLATFORM_PANEL).should("not.be.visible");
  // });

  it("opens the correct panel when a control is clicked", () => {
    cy.get(PLATFORM_PANEL).should("not.be.visible");

    cy.get(PLATFORM_PANEL_OPEN_CONTROL).trigger("click");
    cy.get(PLATFORM_PANEL).should("be.visible");
  });

  it("keeps the panel open after a control is clicked and does not open other panels of hover", () => {
    cy.get(PLATFORM_PANEL).should("not.be.visible");

    cy.get(PLATFORM_PANEL_OPEN_CONTROL).trigger("click").focus();
    cy.get(PLATFORM_PANEL).should("be.visible");
    cy.get(COMPANY).should("not.be.visible");

    cy.get(COMPANY_OPEN_CONTROL).trigger("mouseenter");
    cy.get(COMPANY).should("not.be.visible");
  });

  it("closes all panels when clicked outside the nav", () => {
    cy.get(PLATFORM_PANEL).should("not.be.visible");

    cy.get(PLATFORM_PANEL_OPEN_CONTROL).trigger("click").focus();
    cy.get(PLATFORM_PANEL).should("be.visible");

    // We force a click because body has no height and Cypress tries to click on the open nav instead
    cy.get(OUTSIDE_MEGANAV).trigger("click", { force: true });
    cy.get(PLATFORM_PANEL).should("not.be.visible");
  });

  it("toggle the search panel when a control is clicked", () => {
    cy.get(SEARCH_PANEL).should("not.be.visible");

    cy.get(SEARCH_PANEL_OPEN_CONTROL).trigger("click");
    cy.get(SEARCH_PANEL).should("be.visible");

    cy.get(SEARCH_PANEL_OPEN_CONTROL).trigger("click");
    cy.get(SEARCH_PANEL).should("not.be.visible");
  });

  it("do not display other panels on hover when search panel is open", () => {
    cy.get(SEARCH_PANEL_OPEN_CONTROL).trigger("click");
    cy.get(SEARCH_PANEL).should("be.visible");

    cy.get(PLATFORM_PANEL_OPEN_CONTROL).trigger("mouseenter");
    cy.get(PLATFORM_PANEL).should("not.be.visible");
  });

  it("should focus on input when search panel is opened", () => {
    cy.get(SEARCH_PANEL_OPEN_CONTROL).trigger("click");
    cy.get(SEARCH_PANEL).should("be.visible");
    cy.get(SEARCH_PANEL_INPUT).then(($input) => {
      const input = $input.get(0);

      cy.focused().should(($focused) => {
        expect($focused[0]).to.eql(input);
      });
    });
  });
});

describe("Opening panels on mobile", () => {
  beforeEach(() => {
    cy.viewport("iphone-8");
    cy.visit("/components/meganav");
  });

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

  it("shows the search input and suggestions", () => {
    cy.get(MOBILE_DROPDOWN_CONTROL).trigger("click");
    cy.get(MOBILE_DROPDOWN).should("be.visible");

    cy.get(SEARCH_PANEL_MOBILE_INPUT).should("be.visible");
    cy.get(SEARCH_PANEL_MOBILE_INPUT).trigger("focus");
    cy.contains("Popular pages");
  });

  it("shows the search input and the clear button after typing", () => {
    cy.get(MOBILE_DROPDOWN_CONTROL).trigger("click");
    cy.get(SEARCH_PANEL_MOBILE_CLEAR).should("not.be.visible");
    cy.get(SEARCH_PANEL_MOBILE_INPUT).type("a");
    cy.get(SEARCH_PANEL_MOBILE_CLEAR).should("be.visible");
  });

  it("should clear the input and not show clear after typing and clicking clear", () => {
    cy.get(MOBILE_DROPDOWN_CONTROL).trigger("click");
    cy.get(SEARCH_PANEL_MOBILE_INPUT).type("a");
    cy.get(SEARCH_PANEL_MOBILE_CLEAR).trigger("click");
    cy.get(SEARCH_PANEL_MOBILE_CLEAR).should("not.be.visible");
    cy.get(SEARCH_PANEL_MOBILE_INPUT).should("not.have.value", "a");
  });
});

describe("Meganav options", () => {
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

describe("Notice", () => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  it("does not display the close btn", () => {
    cy.visit(`/components/meganav?notice-close-btn=false`);
    cy.get(NOTICE).should("be.visible");
    cy.get(NOTICE).within(() => cy.get("button").should("not.exist"));
  });

  it("does not collapse on scroll", () => {
    cy.visit(`/components/meganav?collapse=false`);
    cy.document().then((document) => {
      document.body.append(mockContent(document));
    });
    cy.get(NOTICE).should("be.visible");
    cy.scrollTo(0, 100);
    cy.get(NOTICE).should("be.visible");
  });

  describe("with defaults", () => {
    beforeEach(() => {
      cy.viewport("macbook-13");
      cy.visit("/components/meganav");

      cy.document().then((document) => {
        document.body.append(mockContent(document));
      });
    });

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
  });
});

describe("Search", () => {
  describe("mobile", () => {
    beforeEach(() => {
      cy.viewport("iphone-8");
      cy.visit("/components/meganav");
    });

    it("shows suggestions dropdown", () => {
      cy.get(MOBILE_DROPDOWN_CONTROL).trigger("click");
      cy.get(SEARCH_PANEL_MOBILE_INPUT).trigger("focus");
      cy.get(SEARCH_PANEL_MOBILE_INPUT).type("a");
      cy.get("[data-id='meganav-search-autocomplete-list'] li")
        .its("length")
        .should("be.gte", 0);
    });

    it("sets the correct url for the search form", () => {
      cy.get(MOBILE_DROPDOWN_CONTROL).trigger("click");
      cy.get(SEARCH_PANEL_MOBILE_INPUT)
        .parent()
        .parent() // form
        .invoke("attr", "action")
        .should("eq", "/search");
    });
  });

  describe("desktop", () => {
    beforeEach(() => {
      cy.viewport("macbook-15");
      cy.visit("/components/meganav");
    });

    it("shows suggestions dropdown", () => {
      cy.get(SEARCH_PANEL_OPEN_CONTROL).trigger("click");
      cy.get(SEARCH_PANEL_INPUT).trigger("focus");
      cy.get(SEARCH_PANEL_INPUT).type("a");
      cy.get("[data-id='meganav-search-autocomplete-list'] li")
        .its("length")
        .should("be.gte", 0);
    });

    it("sets the correct url for the search form", () => {
      cy.get(SEARCH_PANEL_OPEN_CONTROL).trigger("click");
      cy.get(SEARCH_PANEL_INPUT)
        .parent()
        .parent() // form
        .invoke("attr", "action")
        .should("eq", "/search");
    });
  });
});
