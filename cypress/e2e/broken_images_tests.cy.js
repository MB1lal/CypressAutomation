import '../support/commands'

describe('Verify valid and broken images', () => {
    beforeEach(() => {
        cy.navigateToXPage('Broken Images')
    })

    it('Validate page has broken images', () => {
        cy.get('[src="asdf.jpg"]').invoke('prop', 'naturalHeight').should('be.eq', 0);
        cy.get('[src="asdf.jpg"]').invoke('prop', 'naturalWidth').should('be.eq', 0);

        cy.get('[src="hjkl.jpg"]').invoke('prop', 'naturalHeight').should('be.eq', 0);
        cy.get('[src="hjkl.jpg"]').invoke('prop', 'naturalWidth').should('be.eq', 0);
        
    })

    it('Validate page has valid image', () => {
        cy.get('[src="img/avatar-blank.jpg"]').invoke('prop', 'naturalHeight').should('be.gt', 0);
        cy.get('[src="img/avatar-blank.jpg"]').invoke('prop', 'naturalWidth').should('be.gt', 0);
        
    })
})