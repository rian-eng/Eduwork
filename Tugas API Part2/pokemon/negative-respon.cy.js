/// <reference types="cypress" />

describe('Update user', () => {    
    it('Successfully validate negative response' , () => {
        cy.request({
            url: 'https://pokeapi.co/api/v2/pokemon/eduwork',
            failOnStatusCode: false
        }).as('eduwork')
        cy.get('@eduwork').its('status').should('equal', 404)     
    });
});
