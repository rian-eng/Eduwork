/// <reference types="cypress" />

describe('Update user', () => {
    it('Successfully update new user' , () => {
        var user = {
            "name" : "Rian Maulana",
            "job" : "Comp Engineer",
            "mail" : "apam@gmail.com"
        }

        cy.request('PUT', 'https://reqres.in/api/users/2', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(user.name)
        })    
    });
});