describe("Slider", () => {
  const url = "/components/slider?framework=vw";
  const sliderIds = "[data-id='slider']";
  const sliderControlId = "[data-id='slider-controls']";
  const sliderControlNextId = "[data-id='slider-next']";
  const sliderControlPreviousId = "[data-id='slider-previous']";

  const SLIDE_1_COPY =
    "Powers live chat, updates, analytics, and composition for millions of users.";
  const SLIDE_2_COPY =
    "Powers virtual venues for millions of event attendees around the world.";
  const SLIDE_3_COPY =
    "Provides 5 million daily users with live financial commentary and stock tickers.";
  const SLIDE_4_COPY = "Monitors live car performance data across the USA.";

  beforeEach(() => {
    cy.visit(url);
  });

  it("should change the slide back on click", () => {
    cy.viewport("iphone-8");

    cy.get(sliderIds)
      .eq(0)
      .within(() => {
        cy.contains(SLIDE_1_COPY).should("be.visible");
        cy.contains(SLIDE_2_COPY).should("not.be.visible");
        cy.get(sliderControlNextId).click();
        cy.get(sliderControlNextId).click();
        cy.contains(SLIDE_1_COPY).should("not.be.visible");
        cy.contains(SLIDE_2_COPY).should("not.be.visible");
        cy.contains(SLIDE_3_COPY).should("be.visible");
        cy.get(sliderControlPreviousId).click();
        cy.contains(SLIDE_1_COPY).should("not.be.visible");
        cy.contains(SLIDE_2_COPY).should("be.visible");
        cy.contains(SLIDE_3_COPY).should("not.be.visible");
      });
  });

  it("should change the slide forward on click", () => {
    cy.viewport("iphone-8");

    cy.get(sliderIds)
      .eq(0)
      .within(() => {
        cy.contains(SLIDE_1_COPY).should("be.visible");
        cy.contains(SLIDE_2_COPY).should("not.be.visible");
        cy.get(sliderControlNextId).click();
        cy.contains(SLIDE_1_COPY).should("not.be.visible");
        cy.contains(SLIDE_2_COPY).should("be.visible");
      });
  });

  it("should stay on first slide on back click", () => {
    cy.viewport("iphone-8");

    cy.get(sliderIds)
      .eq(0)
      .within(() => {
        cy.contains(SLIDE_1_COPY).should("be.visible");
        cy.contains(SLIDE_2_COPY).should("not.be.visible");
        cy.get(sliderControlPreviousId).click();
        cy.contains(SLIDE_1_COPY).should("be.visible");
        cy.contains(SLIDE_2_COPY).should("not.be.visible");
      });
  });

  it("should stay on last slide on forward click", () => {
    cy.viewport("iphone-8");

    cy.get(sliderIds)
      .eq(0)
      .within(() => {
        cy.contains(SLIDE_1_COPY).should("be.visible");
        cy.contains(SLIDE_2_COPY).should("not.be.visible");
        cy.get(sliderControlNextId).click();
        cy.get(sliderControlNextId).click();
        cy.get(sliderControlNextId).click();
        cy.get(sliderControlNextId).click();
        cy.contains(SLIDE_4_COPY).should("be.visible");
        cy.contains(SLIDE_3_COPY).should("not.be.visible");
        cy.get(sliderControlNextId).click();
        cy.contains(SLIDE_4_COPY).should("be.visible");
        cy.contains(SLIDE_3_COPY).should("not.be.visible");
      });
  });

  it("should enable the slider when the viewport changes", () => {
    cy.viewport("macbook-16");

    cy.get(sliderIds)
      .eq(1)
      .within(() => {
        cy.get(sliderControlId).should("not.be.visible");
      });

    cy.viewport("iphone-8");

    cy.get(sliderIds)
      .eq(1)
      .within(() => {
        cy.get(sliderControlId).should("not.be.visible");
      });
  });
});
