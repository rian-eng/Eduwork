/// <reference types="cypress" />

describe('Validate Header', () => {
    it('Successfully validate header' , () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
          .should('include', 'application/json; charset=utf-8')
    });
    it('Successfully validate body' , () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
          .then((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.have.property('abilities')
        })
    });
});