describe("Showcase", () => {
  it("should change the slide on click", () => {
    cy.viewport("macbook-16");

    cy.visit("/components/showcase?framework=vw")
      .get("[data-id='showcase-slides']")
      .first()
      .then(() => cy.contains("Pato Echagüe").should("not.be.visible"));

    cy.get("[data-id='showcase-slides']")
      .first()
      .find("li:nth-child(2)")
      .trigger("click");

    cy.get("[data-id='showcase-slides']")
      .first()
      .contains("Pato Echagüe")
      .should("be.visible");
  });

  it("should change the slide after 5s", () => {
    cy.viewport("macbook-16");
    cy.clock();

    cy.visit("/components/showcase?framework=vw")
      .get("[data-id='showcase-slides']")
      .last()
      .scrollIntoView()
      .then(() => cy.contains("Pato Echagüe").should("not.be.visible"));

    cy.tick(5010);

    cy.get("[data-id='showcase-slides']")
      .last()
      .contains("Pato Echagüe")
      .should("be.visible");
  });

  it("should not change the slide after 5s if mouse is over ", () => {
    cy.viewport("macbook-16");
    cy.clock();

    cy.visit("/components/showcase?framework=vw")
      .get("[data-id='showcase-slides']")
      .last()
      .scrollIntoView()
      .then(() => cy.contains("Pato Echagüe").should("not.be.visible"));

    cy.get("[data-id='showcase-slides']").last().trigger("mouseover");

    cy.tick(5010);

    cy.get("[data-id='showcase-slides']")
      .last()
      .contains("Pato Echagüe")
      .should("not.be.visible");
  });
});
