/// <reference types="cypress" />

describe('Login & Logout Test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    })

    it('Should try to login with invalid & valid data', ()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name="submit"]').click()
    
        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    
        cy.fixture("user_login&logout").then(user => { //pemanggilan file "user_login&logout.json" pada folder fixture
            const username = user.username
            const password = user.password

            cy.tugas_login_logout(username,password) //pemanggilan file "commands.js" pada folder support
            
            cy.get('h2').should('contain.text', 'Cash Accounts')                   
        })
    
		cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('strong').should('contain.text', 'Home')
    })
})