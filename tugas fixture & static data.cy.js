/// <reference types="cypress" />

describe('Working with input', ()=> {
    it('Should try to login', ()=>{
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.url().should('include', 'index.html')
        
        cy.fixture('standarduser').then(user =>{ //using 'standarduser.json' in folder fixture
            const username = user.username
            const password = user.password

            cy.get('input#user-name').clear()
            cy.get('input#user-name').type(username)
           
            cy.get('input[id="password"]').clear()
            cy.get('input[id="password"]').type(password)
            
            cy.get('input[class="btn_action"]').click()
            cy.url().should('include', '/v1/inventory') 
        })
    })
}); 