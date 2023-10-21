
describe('JavaScript Alerts Tests', () => {
    beforeEach(() => {
        cy.navigateToXPage('JavaScript Alerts')
    });

    it('Verify working of JS Alerts', () => {
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert', (alertText) => {
          expect(alertText).eq('I am a JS Alert');
        });
        cy.get('#result')
          .contains('You successfully clicked an alert')
          .should('be.visible');
    });

    it('Verify working of JS Confirm', () => {
        cy.contains('Click for JS Confirm').click()
        cy.on('window:alert', (alertText) => {
          expect(alertText).eq('I am a JS Confirm');
        });
        cy.get('#result')
          .contains('You clicked: Ok')
          .should('be.visible');
    });

    it('Verify working of JS Confirm', () => {
        cy.window().then(($prompt) => {
          cy.stub($prompt, 'prompt').returns("Test")
          cy.contains('Click for JS Prompt').click().should('be.visible');
        })
        cy.get('#result')
          .contains('You entered: Test')
          .should('be.visible');
    });
});