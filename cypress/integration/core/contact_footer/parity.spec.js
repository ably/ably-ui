describe("Contact Footer Panel", () => {
  it("looks the same for desktop", () => {
    cy.viewport("macbook-15");
    cy.compareComponents({
      reactComponentUrl: "/components/contact-footer",
      viewComponentUrl: "/components/contact-footer?framework=vw",
      selector: '[data-id="contact-footer"]',
    });
  });

  it("looks the same for tablet", () => {
    cy.viewport("ipad-2");
    cy.compareComponents({
      reactComponentUrl: "/components/contact-footer",
      viewComponentUrl: "/components/contact-footer?framework=vw",
      selector: '[data-id="contact-footer"]',
    });
  });

  it("looks the same for phone", () => {
    cy.viewport("iphone-8");
    cy.compareComponents({
      reactComponentUrl: "/components/contact-footer",
      viewComponentUrl: "/components/contact-footer?framework=vw",
      selector: '[data-id="contact-footer"]',
    });
  });
});
