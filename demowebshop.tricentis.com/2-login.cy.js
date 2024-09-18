/// <reference types="cypress" />

describe('Should visit the website', () => {
    it('Should visit the website', ()=>{
        cy.visit('https://demowebshop.tricentis.com/')
        cy.get('.ico-login').should('contain.text', 'Log in')
        cy.get('.ico-login').click()
        cy.get(':nth-child(2) > label').should('contain.text', 'Email')
    })

    it('Should login with incorrect account login with correct account', ()=>{
        cy.visit('https://demowebshop.tricentis.com/login')
        cy.get(':nth-child(2) > label').should('contain.text', 'Email')

        cy.get('#Email').type('failed@gmail.com')
        cy.get('#Password').type('qwerty')
    
        cy.get('form > .buttons > .button-1').click()
        cy.get('.validation-summary-errors > span').should('contain.text', 'Login was unsuccessful. Please correct the errors and try again.')
    })

    it('Should login with correct account & Logout', ()=>{
        cy.visit('https://demowebshop.tricentis.com/login')
        cy.get(':nth-child(2) > label').should('contain.text', 'Email')

        cy.get('#Email').type('testkun@gmail.com')
        cy.get('#Password').type('testakun')
    
        cy.get('form > .buttons > .button-1').click()
        cy.get('.header-links > ul > :nth-child(1) > .account').should('contain.text', 'testkun@gmail.com')

    //('SHOULD LOGOUT FROM ACCOUNT')
        cy.get('.ico-logout').click()
        cy.get('.master-wrapper-page').should('be.visible')
    })

});