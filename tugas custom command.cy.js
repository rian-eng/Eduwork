/// <reference types="cypress" />

describe('Working with input', ()=> {
    
    it('Should try to login', ()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        
        cy.fixture('user_tcc').then(user =>{ //pemanggilan file "user_tcc.json" pada folder fixture
            const username = user.username
            const password = user.password
            
            cy.tugas_custom_command(username,password) //pemanggilan file "commands.js" pada folder support

            cy.get('.alert-success').should('contain.text', 'The payment was successfully submitted.')
        })
    })
});