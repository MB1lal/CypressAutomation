import '../support/commands'

describe('Testing drag and drop feature', () => {
    beforeEach(() => {
        cy.navigateToXPage('Drag and Drop')
    })

    it('Verify element "A" drops to "B"', () => {
        const dataTransfer = new DataTransfer();
        cy.get('#column-a').trigger('dragstart', {dataTransfer})
        cy.get('#column-b').trigger('drop', {dataTransfer})
    })
})