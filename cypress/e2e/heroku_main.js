
Cypress.Commands.add('navigateToXPage', (pageName) => {
  cy.visit(Cypress.config('baseUrl'));
  cy.url().should('include', Cypress.config('baseUrl'));
  cy.url().should('include', 'the-internet.herokuapp.com');
  cy.contains(pageName).click();
  switch(pageName) {
    case 'Form Authentication':
        cy.url().should('include', '/login');
        break;
    case 'Checkboxes':
         cy.url().should('include', '/checkboxes');
         break;
  }
});