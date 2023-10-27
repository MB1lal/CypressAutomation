import '../support/commands'

describe('Testing Context clicking', () => {
    beforeEach(() => {
        cy.navigateToXPage('Context Menu')
    })

    it('Verify js popup when there is a context click', () => {
        cy.on('window:alert', (alertText) => {
            cy.get('#hot-spot').rightclick()    
            expect(alertText).eq('You selected a context menu');
          });
        
    })
})