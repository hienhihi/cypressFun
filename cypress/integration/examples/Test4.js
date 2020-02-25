describe('My 4th Test', function() {
  it('My 4th test', function() {

    //Check boxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#alertbtn').click(); //test to see if alert can be clicked
    cy.get('[value="Confirm"]').click(); //test to see if confirm can be clicked

    //window:alert
    cy.on('window:alert', (str) => { //test the alert function and see if it contains the correct strings
      //use Mocha for expectation
      expect(str).to.equal('Hello , share this practice page and share your knowledge') 
    })
    cy.on('window:confirm', (str) => { //test the confirm function and see if it contains the correct string
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
    
    //reason why it doesn't go to another tab because we remove the attribute 
    cy.get('#opentab').invoke('removeAttr', 'target').click(); //click into this item to go to a specific page
    cy.url().should('include', 'rahulshettyacademy')
    cy.go('back'); // to navigate through pages, back or foward
  })
})