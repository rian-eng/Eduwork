/// <reference types="cypress" />

describe('Working with input', ()=> {
    it('Visit the website', ()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    })
    
    it('Should fill username', ()=> {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username.rian')
    })
    
    it('Should fill password', ()=> { 
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password.rian')
    })    

    it('Should checkbox keep signed in', ()=> {  
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.get('#user_remember_me').check()
        //cy.get('#user_remember_me').type('checkbox')
    })
});