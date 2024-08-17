describe('Website bupa.com', () => {

    it('Should visit website', ()=>{
        cy.visit('https://www.rsmurniteguh.com')
        cy.get('.navbar-toggle > :nth-child(2)').click()
        cy.get(':nth-child(8) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > :nth-child(2) > a').click()

    })
    it('Should fill data & result', ()=>{
        cy.visit('https://www.rsmurniteguh.com/id/tools/kalkulator_bmi')
        cy.get('#pria').check() //#wanita
        cy.get('#bmiWeight').type('65')
        cy.get('#bmiAge').type('25')
        cy.get('#bmiHeight').type('170')
        cy.get('button.btn.btn-primary.mb-10').click()
        cy.get('h3').should('contain.text', 'Hasil')
    })
});