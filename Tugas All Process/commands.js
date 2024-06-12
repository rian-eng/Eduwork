
Cypress.Commands.add('tugas_all_process', (username,password) => { // untuk file "tugas All Process.cy.js"
    cy.clearCookies()
    cy.clearAllLocalStorage()
    
    cy.get('input#user-name').clear()
    cy.get('input#user-name').type(username)
           
    cy.get('input[id="password"]').clear()
    cy.get('input[id="password"]').type(password)
            
    cy.get('input[class="btn_action"]').click()
})