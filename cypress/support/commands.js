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
import selector from './elementSelectors/selectors'
import './educator/attendancelogcommands'
import './student/studentlogincommands'
import './family/familycmds'
// -- This is a command  login--
Cypress.Commands.add('EducatorLogin', (username, password) => {
  cy.visit("https://auth.qa.edgenuity.com/Login/Login/Educator")
  cy.get(selector.LOGIN_USERNAME).should('be.visible').type(username)
  cy.get(selector.LOGIN_PASSWORD).should('be.visible').type(password)
  cy.get(selector.LOGIN_SUBMIT).should('text').click()
  cy.title().should('include', 'Edgenuity for Educators - ')
})
Cypress.Commands.add('EducatorUnsuccessfulLogin', (InvalidUsername, InvalidPassword) => {
  cy.visit("https://auth.qa.edgenuity.com/Login/Login/Educator")
  cy.get(selector.LOGIN_USERNAME).should('be.visible').type(InvalidUsername)
  cy.get(selector.LOGIN_PASSWORD).should('be.visible').type(InvalidPassword)
  cy.get(selector.LOGIN_SUBMIT).should('be.visible').click()
  cy.get(selector.LOGIN_ERROR_MESSAGE).should('have.text', "The  username  and password combination you entered isn't correct.")

})
Cypress.Commands.add('StudentLogin', (username, password) => {
  cy.visit("https://auth.qa.edgenuity.com/Login/Login/Student")
  cy.get(selector.LOGIN_USERNAME).should('be.visible').type(username)
  cy.get(selector.LOGIN_PASSWORD).should('be.visible').type(password)
  cy.get(selector.LOGIN_SUBMIT).should('be.visible').click()
  cy.title().should('include', 'Student')
})

Cypress.Commands.add('EducatorLogout', () => {
  debugger
  cy.get(selector.CLICK_LOGOUT).click();
})

Cypress.Commands.add('StudentLogout', () => {
  debugger
  cy.get(selector.HEADER_TITLE).click();
  cy.contains(selector.CLICK_LOGOUT_OPTION).click();
})


Cypress.Commands.add('handleLoginWarning', () => {
  cy.wait(3000)
  cy.log("trying to click on continue btn if exists!!!");
  cy.get("body").then($body => {
    if ($body.find(selector.LOGIN_WARNING).length > 0) {
      debugger
      cy.log("trying to click on continue btn if exists!!!");
      cy.get(selector.LOGIN_WARNING)
        .click();
    }
  });

})
//
//
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
