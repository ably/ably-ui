describe("Company Autocomplete", () => {
  const url = "/components/company-autocomplete?framework=vw";
  const CONTAINER_SELECTOR = "[data-id=company-autocomplete-dropdown]";
  const ITEMS_SELECTOR = `${CONTAINER_SELECTOR} button`;

  beforeEach(() => {
    cy.visit(url);
  });

  it("shows the drop down when you start typing", () => {
    cy.get("input").type("A");
    cy.get(CONTAINER_SELECTOR).should("be.visible");
    cy.get(CONTAINER_SELECTOR).contains("All Things Apple");
  });

  it("updates the input when a result is clicked on", () => {
    cy.get("input").type("A");
    cy.get(CONTAINER_SELECTOR).should("be.visible");
    cy.get(ITEMS_SELECTOR).eq(1).click();
    cy.get("input").should("have.value", "All Things Apple");
  });

  it("changes the focus when the down arrow is pressed", () => {
    cy.get("input").type("A");
    cy.get("input")
      .trigger("keydown", { code: "ArrowDown" })
      .trigger("keydown", { code: "ArrowDown" })
      .get(ITEMS_SELECTOR)
      .eq(1)
      .should("have.focus");
  });

  it("changes the focus when the up arrow is pressed", () => {
    cy.get("input").type("A");

    cy.get("input")
      .trigger("keydown", { code: "ArrowDown" })
      .trigger("keydown", { code: "ArrowDown" })
      .get(ITEMS_SELECTOR)
      .eq(1)
      .should("have.focus");

    cy.get("input")
      .trigger("keydown", { code: "ArrowUp" })
      .get(ITEMS_SELECTOR)
      .eq(0)
      .should("have.focus");
  });

  it("stops changing focus when the down arrow is pressed at the last item", () => {
    cy.get("input").type("A");

    cy.get("input")
      .trigger("keydown", { code: "ArrowDown" })
      .trigger("keydown", { code: "ArrowDown" })
      .trigger("keydown", { code: "ArrowDown" })
      .trigger("keydown", { code: "ArrowDown" })
      .trigger("keydown", { code: "ArrowDown" })
      .get(ITEMS_SELECTOR)
      .eq(4)
      .should("have.focus");

    cy.get("input")
      .trigger("keydown", { code: "ArrowDown" })
      .get(ITEMS_SELECTOR)
      .eq(4)
      .should("have.focus");
  });

  it("focuses on the input when up arrow is pressed on the first item", () => {
    cy.get("input").type("A");

    cy.get("input")
      .trigger("keydown", { code: "ArrowDown" })
      .get(ITEMS_SELECTOR)
      .eq(0)
      .should("have.focus");

    cy.get("input")
      .trigger("keydown", { code: "ArrowUp" })
      .get("input")
      .should("have.focus");
  });

  it("closes the dropdown when clicked outside it", () => {
    cy.get("input")
      .type("A")
      .get("body")
      .click()
      .get(CONTAINER_SELECTOR)
      .should("not.be.visible");
  });

  it("closes the dropdown when Esc is pressed", () => {
    cy.get("input")
      .type("A")
      .trigger("keydown", { code: "Escape" })
      .get(CONTAINER_SELECTOR)
      .should("not.be.visible")
      .get("input")
      .should("have.focus");
  });

  // Not implemented as Cypress has no Tab support
  // https://docs.cypress.io/api/commands/type#Tabbing
  xit("moves focus away from input if shift-tab is pressed", () => {});

  // Not implemented as Cypress has no Tab support
  // https://docs.cypress.io/api/commands/type#Tabbing
  xit("closes the menu after pressing tab on the last item", () => {});
});
