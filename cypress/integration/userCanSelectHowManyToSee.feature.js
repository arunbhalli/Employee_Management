describe("Displays selected amount of employees", () => {
  before("visit the page", () => {
    cy.visit("/")
  })  

  it('Selects ammount to show', () => {
    cy.get("[data-cy=data-input]").select("value", 12)
  });

  it("displays a list with 12 items", () => {
    cy.get("[data-cy=employee-list]").within(() => {
      cy.get("[data-cy=employee-item]").should("have.length", 12);
    });
  });
})