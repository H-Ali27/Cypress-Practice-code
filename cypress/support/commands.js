// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

// const cypress = require("cypress")

// -- This is a parent command --
Cypress.Commands.add('login', (Username, password) => { 
    cy.get("[placeholder='Username']").type(Username)
    cy.get("[placeholder='Password']").type(password)
    cy.get("[type*='submit']").click()
 })

 Cypress.Commands.add('logout',() => {
    cy.get(".oxd-userdropdown-tab").click()
    cy.get('.oxd-dropdown-menu').contains("Logout").click()
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')    
})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })