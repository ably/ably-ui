describe("Dropdown Menu", () => {
  describe("Menu Trigger", () => {
    it("should open when clicked", () => {
      cy.viewport("macbook-16");

      cy.visit("/components/dropdown-menu")
        .get("#dropdown-menu")
        .contains("Dropdown Menu Trigger")
        .click()
        .get("#menu-content")
        .contains("Using plain HTML");
    });
  });
});
