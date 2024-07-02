/// <reference types="cypress" />

describe('Post new user', () => {
    it('Successfully create new user' , () => {
        var user = {
            "name" : "Rian Maulana",
            "job" : "Engineer"
            }

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users'
        }).as('users')
        cy.get('@users').its('status').should('equal', 201)     
    });
});