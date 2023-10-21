import '../support/commands'

describe('Testing iFrames', () => {
    beforeEach(() => {
        cy.navigateToXPage('Frames');
    });

    it('Verify data in nested frames', () => {
        cy.contains('Nested').click();
        cy.url().should('include', '/nested_frames');
       
        cy.get('frame[src="/frame_top"]').within(($frame) => {
            const locators = ['left', 'middle', 'right'];
            locators.forEach((locator) => {
                cy.wrap(
                    $frame.contents().find(`frame[src="/frame_${locator}"]`),
                  ).within((frame) => {
                    cy.wrap(frame.contents().find('body'))
                      .should('contain.text', locator.toUpperCase())
                  });
            });  
        });

        cy.get('frame[src="/frame_bottom"]').within(($frame) => {
            cy.wrap($frame.contents()).within((frame) => {
              cy.wrap(frame.contents().find('body'))
                .should('contain.text', 'BOTTOM')
            });
          });
    });

    it('Write text into an iFrame', () => {
        var inputText = 'Testing text';
        cy.contains('iFrame').click();
        cy.url().should('include', '/iframe');
        cy.get('#mce_0_ifr').then(($iframe) => {
            const $body = $iframe.contents().find('body')

            cy.wrap($body)
                .find('p')
                .clear()

            cy.wrap($body)
            .find('p')
            .type(inputText)
            .should('have.text', inputText)
        });
    });
});