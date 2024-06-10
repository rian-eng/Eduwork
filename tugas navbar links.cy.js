/// <reference types="cypress" />

describe('Navbar Links Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should display online banking content', ()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('contain.text', 'Online Banking')
    })

    it('Should display feedback contaent', ()=>{
        cy.visit('http://zero.webappsecurity.com/online-banking.html')
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('h3').should('contain.text', 'Feedback')
    }) 

    it('Should display homepage content', ()=>{ 
        cy.visit('http://zero.webappsecurity.com/feedback.html')
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('strong').should('contain.text', 'Home')
    })       
});