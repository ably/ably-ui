describe("Live Chat button", () => {
  const url = "/components/contact-footer";
  const sharedExample = (url) => {
    it("should be active when hubspot widget is defined", () => {
      const open = cy.spy();
      cy.visit(url, {
        onBeforeLoad(win) {
          win.HubSpotConversations = { widget: { open } };
        },
      })
        .get("[data-id='open-chat-widget']")
        .trigger("click")
        .then(() => expect(open).to.be.called);
    });

    it("should be inactive when hubspot widget is undefined", () => {
      cy.visit(url).get("[data-id='open-chat-widget']").should("be.disabled");
    });
  };

  describe("react", () => {
    sharedExample(`${url}`);
  });

  describe("vw", () => {
    sharedExample(`${url}?iframework=vw`);
  });
});
