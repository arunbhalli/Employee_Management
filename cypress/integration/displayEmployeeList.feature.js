
describe("Display list of employees", () => {
  beforeEach(() => {
    cy.visit("https://localhost:3000");
  });
  it("display a header", () => {
    cy.get('#header').should("contain", "Employee List");
  });
  // it('displays a list with 6 items', () => {
  //   cy.get("[data-cy=employee-list]").within(() => {
  //     cy.get("[data-cy=employee-item]").should('have.length',6)
  //   })
  // })
});
