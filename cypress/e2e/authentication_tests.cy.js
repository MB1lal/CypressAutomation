import './heroku_main'

describe('Testing authentication form page', () => {
  beforeEach(() => {
    cy.navigateToXPage('Form Authentication');
  });

  it('Testing the login with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.contains('You logged into a secure area!').should('exist');
  });

  it('Testing the logout journey', () => {

    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();

    cy.contains('You logged into a secure area!').should('exist');

    cy.get('.button').click();
    cy.contains('You logged out of the secure area!').should('exist');
  });

  it('Testing the login with invalid credentials', () => {

    cy.get('#username').type('test');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();

    cy.contains('Your username is invalid!').should('exist');
  });

});