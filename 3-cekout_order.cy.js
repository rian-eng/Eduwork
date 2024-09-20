/// <reference types="cypress" />

describe('Make Order Payment Item', () => {
    
    it('Should login -> select item -> add to cart -> checkout', ()=>{
        cy.visit('https://demowebshop.tricentis.com/login')     //visit website
        cy.get(':nth-child(2) > label').should('contain.text', 'Email')

        cy.get('#Email').type('testkun@gmail.com')      //login with valid account
        cy.get('#Password').type('testakun')
        cy.get('form > .buttons > .button-1').click()   //login button
        cy.get('.header-links > ul > :nth-child(1) > .account').should('contain.text', 'testkun@gmail.com')
    
        cy.get('.top-menu > :nth-child(2)').click()     //select item
        cy.get(':nth-child(1) > .sub-category-item > .picture > a > img').click()
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get('#add-to-cart-button-72').click()        //add to cart
        cy.get('.ico-cart > .cart-label').click()
        cy.get('#termsofservice').click()
        cy.get('#checkout').click()                     //button checkout
        cy.get('#billing-buttons-container > .button-1').click()    //fill data checkout
        cy.get('#PickUpInStore').click()
        cy.get('#shipping-buttons-container > .button-1').click()
        cy.get('#paymentmethod_0').click()
        cy.get('#payment-method-buttons-container > .button-1').click()
        cy.get('#payment-info-buttons-container > .button-1').click()
        cy.get('#confirm-order-buttons-container > .button-1').click()  //button confirm checkout
        cy.get('strong').should('contain.text', 'Your order has been successfully processed!')

    })
});