/// <reference types="cypress" />

describe('Add Item to Cart', () => {
    it('Should visit the website', ()=>{
        cy.visit('https://demoblaze.com/')
        cy.get('body').should('be.visible')
    })  

    it('Should add item', ()=>{
        cy.visit('https://demoblaze.com/')
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()

        cy.get('#cartur').click()
        cy.get('.col-lg-8 > h2').should('contain.text', 'Products')
        // cy.get('.col-lg-1 > .btn').click()

        // cy.get('#name').type('rm')
        // cy.get('#country').type('negara')
        // cy.get('#city').type('kota')
        // cy.get('#card').type('000000000')
        // cy.get('#month').type('bulan')
        // cy.get('#year').type('2024')
        // cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        // cy.get('.sweet-alert > h2').should('contain.text', 'Thank you for your purchase!').wait(1500)
        // cy.get('.confirm').click()
        })

});