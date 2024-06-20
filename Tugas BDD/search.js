/// <reference types="cypress" />

const {Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor");

Given ('I open home page', () => {
    cy.visit('http://zero.webappsecurity.com/index.html');
})

When ('I text on searchbox', () => {
    cy.get('#searchTerm').type('online {enter}')
})

Then ('I should see result', () => {
    cy.get('h2').should('contain.text', 'Search Results:')
})