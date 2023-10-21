import '../support/commands'

describe('A/B Testing Validation', () => {
    context('With Cookies', () => {
      it('should show "A/B Test" with the cookie', () => {
        cy.setCookie('optimizelyOptOut', 'true');
        cy.visit('/abtest');
        cy.contains('A/B Test').should('be.visible');
      });
  
      it('should show "No A/B Test" after page reload', () => {
        cy.setCookie('optimizelyOptOut', 'true');
        cy.visit('/abtest');
        cy.reload();
        cy.contains('No A/B Test').should('be.visible');
      });
    });
  
    context('With Opt-Out URL', () => {
      it('should display a success message for opt-out URL', () => {
        cy.visit('/abtest?optimizely_opt_out=true');
        cy.on('window:alert', (alertText) => {
          expect(alertText).to.equal('You have successfully opted out of Optimizely for this domain.');
        });
      });
  
      it('should show "No A/B Test" after opt-out', () => {
        cy.visit('/abtest?optimizely_opt_out=true');
        cy.on('window:alert', (alertText) => {
          expect(alertText).to.equal('You have successfully opted out of Optimizely for this domain.');
        });
        cy.contains('No A/B Test').should('be.visible');
      });
    });
  });
  