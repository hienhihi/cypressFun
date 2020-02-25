describe('My 6th test', function() {
  it('My 6th test', function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // cy.get('div.mouse-hover-content').invoke('show'); //this will create visibility, if this line is uncomment then no need to force in the line below
    cy.contains('Top').click({force: true}); //add force to overwrite the hidden element
    cy.url().should('include', 'top'); //just to test whether top is included
  })
})