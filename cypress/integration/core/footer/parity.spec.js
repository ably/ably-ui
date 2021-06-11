describe("Footer Parity test", () => {
  it("looks the same on macbook-15", () => {
    cy.viewport("macbook-15");
    cy.compareComponents({
      reactComponentUrl: "/components/footer",
      viewComponentUrl: "/components/footer?framework=vw",
      selector: '[data-id="footer"]',
    });
  });

  it("looks the same on ipad-2", () => {
    cy.viewport("ipad-2");
    cy.compareComponents({
      reactComponentUrl: "/components/footer",
      viewComponentUrl: "/components/footer?framework=vw",
      selector: '[data-id="footer"]',
    });
  });

  it("looks the same on iphone-8", () => {
    cy.viewport("iphone-8");
    cy.compareComponents({
      reactComponentUrl: "/components/footer",
      viewComponentUrl: "/components/footer?framework=vw",
      selector: '[data-id="footer"]',
    });
  });
});
