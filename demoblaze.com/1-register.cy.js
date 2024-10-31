/// <reference types="cypress" />

describe('Register Account', () => {
    it('Should visit the website', ()=>{
        cy.visit('https://demoblaze.com/')
        cy.get('body').should('be.visible')
    })

    it('Should register with new account ', ()=>{
        cy.visit('https://demoblaze.com/')
        cy.get('#signin2').click().wait(500)
        cy.get('#sign-username').type('rm').wait(500)
        cy.get('#sign-password').type('12345').wait(500)
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
        cy.get('#signin2').should('contain.text', 'Sign up')
    })

});