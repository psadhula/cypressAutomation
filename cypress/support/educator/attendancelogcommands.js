import selector from '../elementSelectors/selectors'

  Cypress.Commands.add('OpenAttendanceLog', () => {
    cy.log('opening attendance log!!!');
    cy.contains(selector.NAV_REPORTS).realHover();
    cy.contains(selector.NAV_ATTENDANCELOG).click();
    cy.title().should('include','Attendance Log');  
  
  })

  Cypress.Commands.add('VerifyDropDownPresent',(dropDownName) => {
    cy.get(selector.DROPDOWN_GROUPS).parent().should('contain.text',dropDownName);
  })

  Cypress.Commands.add('VerifyTablePresent',(tableName) =>{
    cy.get(selector.TABLE_STUDENT).invoke('text').then($text =>{
      $text.includes(tableName);
    })
    
       
    //should('contain.text',tableName);
   
  })
