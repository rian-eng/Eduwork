/// <reference types="cypress" />

describe('Should visit the website', () => {
    it('Should visit the website', ()=>{
        cy.visit('https://demowebshop.tricentis.com/')
        cy.get('.ico-register').should('contain.text', 'Register')
        cy.get('.ico-register').click()
        cy.get('h1').should('contain.text', 'Register')
    })

    it('Should register with an already registered account ', ()=>{
        cy.visit('https://demowebshop.tricentis.com/register')
        cy.get('h1').should('contain.text', 'Register')

        cy.get('#gender-male').click()
        cy.get('#FirstName').type('test')
        cy.get('#LastName').type('akun')
        cy.get('#Email').type('testkun@gmail.com')
        cy.get('#Password').type('testakun')
        cy.get('#ConfirmPassword').type('testakun')

        cy.get('#register-button').click()
        cy.get('.validation-summary-errors > ul > li').should('contain.text', 'The specified email already exists')
    })

});