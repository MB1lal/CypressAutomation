import '../support/commands'

describe('Multiple Windows Tests', () => {
    beforeEach(() => {
        cy.navigateToXPage('Multiple Windows');
    })

    it('Verifying newly opened tab content', () => {
        cy.contains('Click Here')
        .invoke('removeAttr', 'target')
        .click()
        .url()
        .should('include', '/windows/new')
        .get('h3')
        .should('have.text', 'New Window');
      cy.go('back');
      cy.contains('Click Here').should('be.visible');
    });
});