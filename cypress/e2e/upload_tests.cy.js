import '../support/commands'
import 'cypress-file-upload'

describe('Uploading a file', () => {
    beforeEach(() => {
        cy.navigateToXPage('File Upload');
    });

    it('Verify file is uploaded successfully', () => {
        cy.get('input[type="file"]').attachFile('../fixtures/example.json');
        cy.get('#file-submit').click();
        cy.get('#uploaded-files').contains('example.json');
    });
});