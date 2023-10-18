describe("Live Chat button", () => {
  const url = "/components/contact-footer";
  const sharedExample = (url) => {
    it("should be active when hubspot widget is defined and widget is present", () => {
      cy.visit(url, {
        onBeforeLoad(window) {
          window.HubSpotConversations = { widget: { open: () => {} } };
          cy.spy(window.HubSpotConversations.widget, "open").as("widgetOpen");
        },
      });

      cy.document().then((document) => {
        const fakeChat = document.createElement("div");
        fakeChat.id = "hubspot-messages-iframe-container";
        document.body.append(fakeChat);
      });

      cy.get("[data-id='open-chat-widget']").contains("Start a live chat");
      cy.get("[data-id='open-chat-widget']").trigger("click");
      cy.get("@widgetOpen").should("be.called");
    });

    it("should be inactive when hubspot widget is undefined", () => {
      cy.visit(url, {
        onBeforeLoad(window) {
          window.HubSpotConversations = { widget: undefined };
        },
      });

      cy.document().then((document) => {
        const fakeChat = document.createElement("div");
        fakeChat.id = "hubspot-messages-iframe-container";
        document.body.append(fakeChat);
      });

      cy.get("[data-id='open-chat-widget']").contains("Live chat unavailable");
    });

    it("should be inactive when hubspot widget is not on the page", () => {
      cy.visit(url, {
        onBeforeLoad(window) {
          window.HubSpotConversations = { widget: { open: () => {} } };
          cy.spy(window.HubSpotConversations.widget, "open").as("widgetOpen");
        },
      });

      cy.get("[data-id='open-chat-widget']").contains("Live chat unavailable");
    });
  };

  describe("react", () => {
    sharedExample(url);
  });

  describe("vw", () => {
    sharedExample(`${url}?framework=vw`);
  });
});
