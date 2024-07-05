/// <reference types="cypress" />

describe('Login user', () => {
    it('Successfully login as user' , () => {
        var user = {
            "name" : "Eve",
            "email" : "eve.holt@reqres.in",
            "password": "cityslicka",
            "token" : "QpwL5tke4Pnpja7X4"
        }

        cy.request('POST', 'https://reqres.in/api/login', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.token).to.eq(user.token)
        })    
    });
});