import '../support/commands'

describe("Add/Remove Elements Tests", () => {
    beforeEach(() => {
        cy.navigateToXPage('Add/Remove Elements')
    })

    it('Verify new elements are added', () => {
        cy.get('button').click()
        cy.contains('Delete').should('exist')
    })

    it('Verify new elements are removed', () => {
        cy.get('button').click()
        cy.contains('Delete')
        cy.contains('Delete').click()
        cy.contains('Delete').should('not.exist')
    })
})