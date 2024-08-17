/// <reference types="cypress" />

describe('Should visit the website', () => {

    it('Should login with incorrect account', ()=>{
        cy.visit('https://sistemtoko.com/login')
        cy.get('h3').should('contain.text', 'Login')

        cy.get('#login > div:nth-child(1)').type('blabla@gmail.com')
        cy.get('#login > div:nth-child(2)').type('blabla')
        cy.get('#login > button').click()

        cy.get('#title').should('contain.text', 'Operation Failed')
    })

    it('Should login with correct account', ()=>{
        cy.visit('https://sistemtoko.com/login')
        cy.get('h3').should('contain.text', 'Login')

        cy.get('#login > div:nth-child(1)').type('primailkom@gmail.com')
        cy.get('#login > div:nth-child(2)').type('qwerty')
        cy.get('#login > button').click()

        cy.get('[class="active"]').should('contain.text', 'Daftar Toko')
    })
});
