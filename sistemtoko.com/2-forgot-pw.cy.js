/// <reference types="cypress" />

describe('Should visit the website', () => {
    it('Should fill with incorrect email', ()=>{
        cy.visit('https://sistemtoko.com/forgot')
        cy.get('h3').should('contain.text', 'Password Reminder')  

        cy.get('form > div:nth-child(2)').type('blabla@gmail.com')

        cy.get('form > div:nth-child(3)').click()
           
        cy.get('strong').should('contain.text', "We can't find a user with that e-mail address. !") 
    })

    it('Should fill with correct email', ()=>{
        cy.visit('https://sistemtoko.com/forgot')
        cy.get('h3').should('contain.text', 'Password Reminder')  

        cy.get('form > div:nth-child(2)').type('primailkom@gmail.com')

        cy.get('form > div:nth-child(3)').click()
           
        cy.get('strong').should('contain.text', "Password reminder sent! !") 
    })
});