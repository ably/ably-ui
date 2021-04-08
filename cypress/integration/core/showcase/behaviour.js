describe("Showcase", () => {
  describe("Quotations", () => {
    it("should change the slide on click", () => {
      cy.viewport("macbook-16");

      cy.visit("/components/showcase?framework=vw")
        .get("[data-id='showcase-slides']")
        .first()
        .then(() => cy.contains("Joe Antonio").should("not.be.visible"));

      cy.get("[data-id='showcase-controls']")
        .first()
        .find("li:nth-child(2) button")
        .trigger("click");

      cy.get("[data-id='showcase-slides']")
        .first()
        .contains("Joe Antonio")
        .should("be.visible");
    });

    it("should change the slide after 5s", () => {
      cy.viewport("macbook-16");
      cy.clock();

      cy.visit("/components/showcase?framework=vw")
        .get("[data-id='showcase-slides']")
        .eq(1)
        .scrollIntoView()
        .then(() => cy.contains("Joe Antonio").should("not.be.visible"));

      cy.tick(5010);

      cy.get("[data-id='showcase-slides']")
        .eq(1)
        .contains("Joe Antonio")
        .should("be.visible");
    });

    it("should not change the slide after 5s if mouse is over ", () => {
      cy.viewport("macbook-16");
      cy.clock();

      cy.visit("/components/showcase?framework=vw")
        .get("[data-id='showcase-slides']")
        .eq(1)
        .scrollIntoView()
        .then(() => cy.contains("Joe Antonio").should("not.be.visible"));

      cy.get("[data-id='showcase-slides']").eq(1).trigger("mouseover");

      cy.tick(5010);

      cy.get("[data-id='showcase-slides']")
        .eq(1)
        .contains("Joe Antonio")
        .should("not.be.visible");
    });
  });

  describe("Case studies", () => {
    it("should have four logo tabs", () => {
      cy.viewport("macbook-16");
      cy.clock();

      cy.visit("/components/showcase?framework=vw")
        .get("[data-id='showcase-controls']")
        .eq(2)
        .children(".ui-showcase-logo")
        .should("have.length", 4);
    });

    it("should have two content columns heading element", () => {
      cy.viewport("macbook-16");
      cy.clock();

      cy.visit("/components/showcase?framework=vw")
        .get("[data-id='casestudy-column']")
        .first()
        .children()
        .should("have.length", 2);
    });
  });
});
