describe("Logo", () => {
  it("looks the same", () => {
    cy.compareComponents({
      reactComponentUrl: "/components/meganav",
      viewComponentUrl: "/components/meganav?framework=vw",
      selector: '[data-id="meganav-logo"]',
    });
  });
});

describe("Navigation Items", () => {
  describe("Desktop", () => {
    it("looks the same when signed-out", () => {
      cy.viewport("macbook-15");

      cy.compareComponents({
        reactComponentUrl: "/components/meganav",
        viewComponentUrl: "/components/meganav?framework=vw",
        selector: '[data-id="meganav-items-desktop"]',
      });
    });

    it("looks the same when signed-in", () => {
      cy.viewport("macbook-15");

      cy.compareComponents({
        reactComponentUrl: "/components/meganav?signed-in=true",
        viewComponentUrl: "/components/meganav?framework=vw&signed-in=true",
        selector: '[data-id="meganav-items-desktop"]',
      });
    });
  });

  describe("Mobile", () => {
    it("looks the same when signed-out", () => {
      cy.viewport("ipad-2");

      cy.compareComponents({
        reactComponentUrl: "/components/meganav",
        viewComponentUrl: "/components/meganav?framework=vw",
        selector: '[data-id="meganav-items-mobile"]',
      });
    });

    it("looks the same when signed-in", () => {
      cy.viewport("ipad-2");

      cy.compareComponents({
        reactComponentUrl: "/components/meganav?signed-in=true",
        viewComponentUrl: "/components/meganav?framework=vw&signed-in=true",
        selector: '[data-id="meganav-items-mobile"]',
      });
    });
  });
});

describe("Panels", () => {
  const config = (
    name,
    type,
    urls = {
      reactComponentUrl: "/components/meganav",
      viewComponentUrl: "/components/meganav?framework=vw",
    }
  ) => {
    const noSpacesName = name.replace(" ", "");
    const lowercaseName = name.replace(" ", "-").toLowerCase();

    switch (type) {
      case "mobile":
        return {
          ...urls,
          beforeScreenshot: () => {
            cy.viewport("ipad-2");
            cy.get('[data-id="meganav-control-mobile-dropdown"]').trigger(
              "click"
            );

            cy.get('[data-id="meganav-mobile-panel-controls"]').within(() => {
              cy.contains(name).trigger("click");
            });
            cy.get('[data-id="meganav-mobile-dropdown"]');
          },
          selector: `#${lowercaseName}-panel-mobile`,
          componentName: `${noSpacesName}PanelMobile`,
        };
      case "desktop":
        return {
          ...urls,
          beforeScreenshot: () => {
            cy.viewport("macbook-15");
            cy.get(
              `[data-id="meganav-control"][aria-controls="${lowercaseName}-panel"]`
            ).trigger("mouseenter");
          },
          selector: `#${lowercaseName}-panel`,
          componentName: `${noSpacesName}PanelDesktop`,
        };
      default:
        console.error("No test type passed");
    }
  };

  describe("PlatformPanel", () => {
    it("looks the same on desktop", () =>
      cy.compareComponents(config("Platform", "desktop")));

    it("looks the same on mobile", () =>
      cy.compareComponents(config("Platform", "mobile")));
  });

  describe("DevelopersPanel", () => {
    it("looks the same on desktop", () =>
      cy.compareComponents(config("Developers", "desktop")));

    it("looks the same on mobile", () =>
      cy.compareComponents(config("Developers", "mobile")));
  });

  describe("WhyAblyPanel", () => {
    it("looks the same on desktop", () =>
      cy.compareComponents(config("Why Ably", "desktop")));

    it("looks the same on mobile", () =>
      cy.compareComponents(config("Why Ably", "mobile")));
  });

  describe("UseCasesPanel", () => {
    it("looks the same on desktop", () =>
      cy.compareComponents(config("Use Cases", "desktop")));

    it("looks the same on mobile", () =>
      cy.compareComponents(config("Use Cases", "mobile")));
  });

  describe("AccountPanel", () => {
    // Only desktop as we don't show the account panel on mobile, just a dashboard link
    it("looks the same on desktop", () =>
      cy.compareComponents(
        config("Account", "desktop", {
          reactComponentUrl: "/components/meganav?signed-in=true",
          viewComponentUrl: "/components/meganav?signed-in=true&framework=vw",
        })
      ));
  });
});
