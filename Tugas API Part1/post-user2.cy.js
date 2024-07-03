/// <reference types="cypress" />

describe('Post new user', () => {
    it('Successfully create new user' , () => {
        var user = {
            "name" : "Rian Maulana",
            "job" : "Comp Engineer"
        }

        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.name).to.eq(user.name)            
        })    
    });
});