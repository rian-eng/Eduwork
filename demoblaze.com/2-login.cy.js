/// <reference types="cypress" />

describe('Login', () => {
    it('Should visit the website', ()=>{
        cy.visit('https://demoblaze.com/')
        cy.get('body').should('be.visible')
    })

    it('Should login with wrong account  ', ()=>{
    cy.visit('https://demoblaze.com/')
        cy.get('#login2').click().wait(500)
        cy.get('#loginusername').type('RM').wait(500)
        cy.get('#loginpassword').type('12345').wait(500)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
    })

    it('Should login with valid account  ', ()=>{
        cy.visit('https://demoblaze.com/')
        cy.get('#login2').click().wait(500)
        cy.get('#loginusername').type('rm').wait(500)
        cy.get('#loginpassword').type('12345').wait(500)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#nameofuser').should('be.visible')
    })    

});