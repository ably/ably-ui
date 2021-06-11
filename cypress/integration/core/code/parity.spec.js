describe("Code Parity test", () => {
  it("looks the same on macbook-15", () => {
    cy.viewport("macbook-15");
    cy.compareComponents({
      reactComponentUrl: "/components/code",
      viewComponentUrl: "/components/code?framework=vw",
      selector: "body",
    });
  });
});
