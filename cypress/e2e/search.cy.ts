describe('Search tests', () => {
  it('User can search tests', () => {
    cy.visit('/search')
    cy.get('#default-search').type("talent");
    cy.get('[cy-item="search-button"]').wait(200).click()
    cy.get("[cy-item='card']").should("have.length.at.least", 1)
  })
})