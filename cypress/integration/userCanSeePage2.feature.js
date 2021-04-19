describe("Displays the second page", () => {
  before("vistis the page", () => {
    cy.visit("/")
  });

  it("Press next page button", () => {
    cy.get("[data-cy=next-page]").click()
  });

  it("Shows employee 7 - 12", () => {
    cy.get("[data-cy=employee-list]").within(() => {
      cy.get("[data-cy=employee-item]").should("have.length", 6);
    });
  })

  it("the list items display the expected content", () => {
    cy.get("[data-cy=employee-list]").within(() => {
      cy.get("[data-cy=employee-item]")
      .first()
      .find("[data-cy=full-name]")
      .should("contain", "Michael Lawson");
    });
    it('the list items display an image',() => {
      cy.get("[data-cy=employee-list]")
      .first()
      .find("[data-cy=avatar]")
      .should('be.visible')
    })
  });
})