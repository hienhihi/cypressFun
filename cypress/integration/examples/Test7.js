describe('My 7th test', function() {
  it('My 7th test', function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#opentab').then(function(el) {
      // const url = el.prop('href'); //non cypress command, needs to be put inside promise
      const url = 'https://www.qaclickacademy.com'; // cannot visit bc it's a unique domain
      cy.log(url);
      cy.visit(url);
    })
    
  })
})