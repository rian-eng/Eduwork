/// <reference types="cypress" />

describe('Should visit the website', function() {
    before(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.url().should('include', 'index.html')
    })

    it('Should try to login', ()=>{
        cy.get('#user-name').clear() //should try to login with invalid data
        cy.get('#user-name').type('invalid username')
           
        cy.get('#password').clear()
        cy.get('#password').type('invalid password')
            
        cy.get('input[class="btn_action"]').click()

        cy.get('h3').should('contain.text', 'Username and password do not match any user in this service')

        cy.fixture('user all process').then(user =>{ //should try to login with valid data
            const username = user.username
            const password = user.password
			
            cy.tugas_all_process(username,password)

            cy.get('[class="product_label"]').should('contain.text', 'Products')
        })

        //should add item to cart & go to cart & payment
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click() //add item to cart
        cy.get(':nth-child(2) > .pricebar > .btn_primary').click()

        cy.get('.shopping_cart_link').click() //go to cart page and checkout
        cy.get('[class="subheader"]').should('contain.text', 'Your Cart')
        cy.get('.btn_action').click()
        
        cy.get('[class="subheader"]').should('contain.text', 'Checkout: Your Information')
        
        cy.get('input[id="first-name"]').type('Rian') //input data user to checkout
        cy.get('input[id="last-name"]').type('Eduwork')
        cy.get('input[id="postal-code"]').type('123456')
        cy.get('.btn_primary').click()

        cy.get('[class="subheader"]').should('contain.text', 'Checkout: Overview') //checkout overview
        cy.get('.btn_action').click()
        
        cy.get('[class="subheader"]').should('contain.text', 'Finish') //finish payment
        cy.get('h2').should('contain.text', 'THANK YOU FOR YOUR ORDER')

        cy.get('.bm-burger-button').click() //should try to logout from website
        cy.get('#logout_sidebar_link').click()

        cy.url().should('include', 'index.html')        
    })
})