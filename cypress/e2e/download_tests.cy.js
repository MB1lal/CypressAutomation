import '../support/commands'

describe('Downloading a secure file', () => {
    beforeEach(() => {
        cy.navigateToXPage('File Download');
    });

    it('Verify file is downloaded successfully', () => {
        var linkHref = Cypress.config('baseUrl') +'/';
        cy.contains('sampleFile.txt')
        .invoke('attr', 'href')
        .then((href) => {
            linkHref += href;
        })
        .then(() => {
            cy.downloadFile(linkHref,'Downloads','sampleFile.txt');
        });
        cy.readFile("./Downloads/sampleFile.txt").should('contain', 'Hello welcome to cypress Framework');
    });
});