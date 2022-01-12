import selector from '../../../support/elementSelectors/selectors'



describe('Feature : Successful and unsuccessful Login', function(){



it('Unsuccessful Login',function(){

    cy.log("First Step : Verifying Unsuccessful Login error message");

    cy.EducatorUnsuccessfulLogin('PSadhula', 'invalidPassword')

    cy.wait(3000);

})



})
