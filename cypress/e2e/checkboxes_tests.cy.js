import './heroku_main'

describe('Testing the checkboxes page', () => {
  const checkbox1 = '#checkboxes > input:first-of-type';
  const checkbox2 = '#checkboxes > input:nth-of-type(2)';

  beforeEach(() => {
    cy.navigateToXPage('Checkboxes');
  });

  it('Verify selection/deselection of checkboxes', () => {
     cy.get(checkbox1).should('exist').click().should('be.checked');
      cy.get(checkbox2).should('exist').click().should('not.be.checked');
  });
});
