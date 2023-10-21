import '../support/commands'

describe('Hover tests', () => {
    beforeEach(() => {
        cy.navigateToXPage('Hovers');
    });

    it('Verify profile names', () => {
        cy.get(':nth-child(3) > img').realHover('mouse');
        cy.contains('h5', 'name: user1')
            .should('be.visible');
        
            cy.get(':nth-child(4) > img').realHover('mouse');
        cy.contains('h5', 'name: user2')
            .should('be.visible');
        
            cy.get(':nth-child(5) > img').realHover('mouse');
        cy.contains('h5', 'name: user3')
            .should('be.visible');   
    });
});