describe('User permissions', () => {
    it('shouldnt let unlogged user react a test', () => {
        cy.visit('/test/what-s-your-hidden-talent')
        cy.get("[cy-item='love']").click()
        cy.get('#modal-overlay').should("be.visible")
    })

    it('shouldnt let unlogged user add a favourite test', () => {
        cy.visit('/test/what-s-your-hidden-talent')
        cy.get("[cy-item='favourite']").click()
        cy.get('#modal-overlay').should("be.visible")
    })

    it('shouldnt let unlogged user comment a test', () => {
        cy.visit('/test/what-s-your-hidden-talent')
        cy.get('[cy-item="testCommentTextArea"]').click()
        cy.get('#modal-overlay').should("be.visible")
    })

    it('should ask for a password for administrator page', () => {
        cy.visit('/manage')
        cy.get('[cy-item="enterButton"]').should("be.visible")
    })
})