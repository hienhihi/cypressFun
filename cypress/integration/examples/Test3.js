describe('My Third Test Case', function() {
  it('My Third Testcase', function() {
    //check boxes
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1'); //check in the box
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked'); //uncheck the box
    cy.get('input[type="checkbox"]').check(['option2', 'option3']);

    // Static dropdown
    cy.get('Select').select('option2').should('have.value', 'option2'); //.select the option

    //dynamic dropdown
    cy.get('#autocomplete').type('ind'); // get the field, type 'ind'
    cy.get('.ui-menu-item div').each(($el, index, $list) => { //then loop through the suggested string list
      if ($el.text() === "India") { //if the text of any of these === India
        $el.click() //select it
      }
    })

    cy.get('#autocomplete').should('have.value', 'India'); //then inside the input field should have 'India'

    //Element display / Visible, invisible
    cy.get('#displayed-text').should('be.visible');
    cy.get('#hide-textbox').click();
    cy.get('#displayed-text').should('not.be.visible');
    cy.get('#show-textbox').click();
    cy.get('#displayed-text').should('be.visible');

    // Radio Button
    cy.get('[value="radio2"]').check('radio2'); //customize css value/name
  })
})