/// <reference types="cypress" />

describe('Update user', () => {
  it('Successfully update new user' , () => {
      var user = {
          "name": "limber",
          "url": "https://pokeapi.co/api/v2/ability/7/"
      }

      cy.request('https://pokeapi.co/api/v2/ability/7/', user).then((response) => {
          expect(response.status).equal(200)
          expect(response.body.name).to.eq(user.name)
      })    
  });

  it('Successfully update new user' , () => {
    cy.request('https://pokeapi.co/api/v2/ability/7/').as ('limber').then((response) => {
        expect(response.status).equal(200)
        expect(response.body).to.have.property('names')
    })
  });

  it('Successfully validate body' , () => {
    cy.request('https://pokeapi.co/api/v2/ability/7/').as('limber')
    cy.get('@limber').its('status').should('equal', 200)
    cy.get('@limber').its('body').should('include', {name: "limber"})
  });
  
});