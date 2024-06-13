// file ini terdapat pada folder support yang dipanggil pada File
// "tugas custom command.cy.js"

Cypress.Commands.add('tugas_custom_command', (username,password) => { // untuk file "tugas custom command.cy.js"
    cy.clearCookies()
    cy.clearAllLocalStorage()

    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)

    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type(password)

    //cy.get('#user_remember_me').click()

    cy.get('input[name="submit"]').click()
}) 