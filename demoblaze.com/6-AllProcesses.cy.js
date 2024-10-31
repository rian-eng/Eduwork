describe('Login', () => {
    it('Should visit the website', ()=>{
        cy.visit('https://demoblaze.com/')
        cy.get('body').should('be.visible')
    })

    it('Should complete all processes  ', ()=>{
        cy.visit('https://demoblaze.com/')
        
        //LOGIN
        cy.get('#login2').click().wait(500)
        cy.get('#loginusername').type('rm').wait(500)
        cy.get('#loginpassword').type('12345').wait(500)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#nameofuser').should('be.visible')

        //ADD TO CART
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.get('#cartur').click()
        cy.get('.col-lg-8 > h2').should('contain.text', 'Products')

        //CHECKOUT
        cy.get('.col-lg-1 > .btn').click()
        cy.get('#name').type('rm')
        cy.get('#country').type('negara')
        cy.get('#city').type('kota')
        cy.get('#card').type('000000000')
        cy.get('#month').type('bulan')
        cy.get('#year').type('2024')
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('.sweet-alert > h2').should('contain.text', 'Thank you for your purchase!').wait(1500)
        cy.get('.confirm').click()

        //LOGOUT
        cy.get('#logout2').click()
        cy.get('body').should('be.visible')
    })
    
});