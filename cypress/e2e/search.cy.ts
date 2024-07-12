describe('Search page', () => {
  it('User can search items', () => {
    cy.visit('https://www.testarot.com/search')
    cy.get('#default-search').type("talent");
    cy.get("[cy-item='search-button']").click();
    cy.get("[cy-item='card']").should("have.length.at.least", 1)
  })
})