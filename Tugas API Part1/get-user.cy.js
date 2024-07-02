/// <reference types="cypress" />

describe('Get User List', () => {
    it('Verify the list users will displayed' , () => {
        cy.request({
            method: 'GET',
            // url: 'https://reqres.in/api/users?page=2&per_pages=1&delay=3' //DENGAN PARAMETER
            url: 'https://reqres.in/api/users' //TANPA PARAMETER
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)     
    });
});