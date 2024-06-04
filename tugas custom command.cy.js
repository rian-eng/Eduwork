/// <reference types="cypress" />

describe('Working with input', ()=> {
    
    it('Should try to login', ()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        
            const username = "username";
            const password = "password";
            
  
            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
           
            cy.get('input[name="user_password"]').clear()
            cy.get('input[name="user_password"]').type(password)
        
            //cy.get('#user_remember_me').click()
            
            cy.get('input[name="submit"]').click()
           
            cy.url().should('include', '/bank/account-summary')

            cy.contains('Pay Bills').click()
            cy.url().should('include', '/bank/pay-bills',)
            
            cy.get('#sp_amount').clear()
            cy.get('#sp_amount').type('100')

            cy.get('#sp_description').clear()
            cy.get('#sp_description').type('make payment')

            cy.get('#sp_date').clear()
            cy.get('#sp_date').type('2024-6-3')

            cy.get('input[class="btn btn-primary"]').click()
           
            cy.get('.alert-success').should('contain.text', 'The payment was successfully submitted.')
        
    })
    
    
    
    
    
});