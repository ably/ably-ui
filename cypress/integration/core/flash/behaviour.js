describe("Flash", () => {
  it("should close the flash", () => {
    cy.viewport("macbook-16");
    cy.visit("/components/flash");
    const flashesId = "[data-id='ui-flashes']";
    const flashId = "[data-id='ui-flash']";

    cy.get(flashesId).should("be.visible");

    cy.get(flashesId).within(() => {
      cy.get(flashId).filter(":visible").should("have.length", 5);
      cy.get("button").first().click();
      cy.get(flashId).filter(":visible").should("have.length", 4);
    });
  });
});
