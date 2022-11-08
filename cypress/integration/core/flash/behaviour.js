describe("Flash", () => {
  const flashesId = "[data-id='ui-flashes']";
  const flashId = "[data-id='ui-flash']";

  beforeEach(() => {
    cy.viewport("macbook-16");
    cy.visit("/components/flash");
  });

  it("should close the flash", () => {
    cy.get(flashesId).should("be.visible");

    cy.get(flashesId).within(() => {
      cy.get(flashId).filter(":visible").should("have.length", 5);
      cy.get("button").first().click();
      cy.get(flashId).filter(":visible").should("have.length", 4);
    });
  });

  it("success, info and notice flashes should close after 8 seconds", () => {
    cy.get(flashesId).should("be.visible");

    cy.get(flashesId).within(() => {
      cy.get(flashId).filter(":visible").should("have.length", 5);

      cy.get(flashId).eq(0).contains("Congratulations! You've won the Oscar");
      cy.get(flashId).eq(1).contains("This is a notice");
      cy.get(flashId).eq(2).contains("This is an error, very bad");
      cy.get(flashId).eq(3).contains("This is an alert");
      cy.get(flashId)
        .eq(4)
        .contains("Some useful information, you are welcome");
    });

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(9000);

    cy.get(flashesId).should("be.visible");

    cy.get(flashesId).within(() => {
      cy.get(flashId).filter(":visible").should("have.length", 2);
      cy.get(flashId).eq(0).contains("This is an error, very bad");
      cy.get(flashId).eq(1).contains("This is an alert");
    });
  });
});
