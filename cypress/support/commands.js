import "cypress-real-events/support";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('navigateToXPage', (pageName) => {
  cy.log('Navigating to main page');
  cy.visit(Cypress.config('baseUrl'));
  cy.log('Verifying heroku main page is open');
  cy.url().should('include', Cypress.config('baseUrl'));
  cy.url().should('include', 'the-internet.herokuapp.com');
  cy.log('Navigating to ' + pageName);
  cy.contains(pageName).click();
  cy.log('Verifying ' + pageName + ' is open');
  switch(pageName) {
    case 'Form Authentication':
      cy.url().should('include', '/login');
      break;
    case 'Checkboxes':
      cy.url().should('include', '/checkboxes');
      break;
    case 'Dropdown':
      cy.url().should('include', '/dropdown');
      break;
    case 'Dynamic Loading':
      cy.url().should('include', '/dynamic_loading');
      break;
  }
});