import '../support/commands'

describe('Notification Messages Tests', () => {
    const assertMessage = (elementSelector) => {
        cy.get(elementSelector).then(($element) => {
            const flashText = $element.text().replace('×', '').trim();
            expect(flashText).to.satisfy((value) => {
                return value === 'Action successful' || value === 'Action unsuccesful, please try again';
            });
        });
    };

    beforeEach(() => {
        cy.navigateToXPage('Notification Messages');
    })

    it('Interacting with notifications message', () => {
        assertMessage('#flash');
        cy.get('p > a').click();
        assertMessage('#flash');
    });
});