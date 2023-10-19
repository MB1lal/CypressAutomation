import '../support/commands'

describe('Testing the dropdown page', () => {

  beforeEach(() => {
    cy.navigateToXPage('Dropdown');
  });

  it('Verify selection of options in dropdown', () => {
    cy.get('#dropdown').select('Option 2');
    cy.get('#dropdown').find('option:selected').should('have.text', 'Option 2');
  });
});