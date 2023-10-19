import '../support/commands'

describe('Dynamic Loading Tests', () => {
    let hiddenElementSelector = '#loading';
    let finishElementSelector = '#finish > h4';

    beforeEach(() => {
        cy.navigateToXPage('Dynamic Loading');
    });

    it('Loads hidden element after button click', () => {
        cy.get('[href="/dynamic_loading/1"]').click();
        cy.url().should('include', 'dynamic_loading/1');
        cy.get('button').click();
        cy.get(hiddenElementSelector).should('not.be.visible');
        cy.get(finishElementSelector).should('have.text', 'Hello World!');
    });

    it('Loads newly created element after button click', () => {
        cy.get('[href="/dynamic_loading/2"]').click();
        cy.url().should('include', 'dynamic_loading/2');
        cy.get('button').click();
        cy.get(finishElementSelector).should('be.visible');
        cy.get(finishElementSelector).should('have.text', 'Hello World!');
    });
});
