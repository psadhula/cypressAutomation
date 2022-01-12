// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import "cypress-real-events/support";
require('cypress-xpath')

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
/*
before('Educator Login', function () {
  cy.log("First step : login as Educator");
  cy.EducatorLogin("PSadhula", "g8!@Mfj14Ji"); 
  cy.handleLoginWarning();
})

/*
before('Student Login', function () {
  cy.log("First step : login as Student");
  cy.StudentLogin("PSadhula", "g8!@Mfj14Ji");
  cy.handleLoginWarning();
})
/*
after('Educator Logout', function () {
  cy.log("Last Step : logout as Educator");
  cy.EducatorLogout();
})

*/
/*
after('Student Logout', function () {
  cy.log("Last Step : logout as Educator");
  cy.StudentLogout();
})
*/

