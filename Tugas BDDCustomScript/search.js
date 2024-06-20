/// <reference types="cypress" />

import HomePage from "./search.page";
const {Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor");

Given ('I open home page', () => {
    HomePage.visit();
})

When ('I text on searchbox', () => {
    HomePage.fillSearchbox('online {enter}');
})

Then ('I should see result', () => {
    cy.get('h2').should('contain.text', 'Search Results:')
})