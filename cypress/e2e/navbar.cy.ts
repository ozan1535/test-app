describe("Navbar items", () => {
    it('should redirect related pages', () => {
        cy.visit("/")
        cy.get('[cy-item="search"]').eq(0).click()
        cy.url().should("include", "search")
        cy.get("li > a").contains("Testarot").click()
        cy.url().should("not.include", "search")
    })
})