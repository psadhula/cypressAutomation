
import selector from '../../../support/elementSelectors/selectors'

describe('Feature : Attendance Log', function(){



it('Test to View Attendance Log',function(){
    cy.log("Second Step : Go to Reports");
    cy.wait(3000);
    cy.OpenAttendanceLog();
    cy.VerifyDropDownPresent('Group');
    cy.VerifyTablePresent('Student');
})



})
