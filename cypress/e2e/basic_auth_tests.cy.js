import '../support/commands'

describe('Validate basic auth', () => {

    it('Verify successfull login with valid creds', () => {
        cy.visit('/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin',          
             },
        })
        cy.contains('Congratulations! You must have the proper credentials.');
    });

    it('Verify unsuccessfull login with invalid creds', () => {
        cy.request({
            method: 'GET',
            url: '/basic_auth',
            failOnStatusCode: false,
            auth: {
                username: 'test',
                password: 'test',
            },
        }).then((response) => {
            expect(response.status).to.equal(401);
            expect(response.body).to.include('Not authorized');
        })
    })
});