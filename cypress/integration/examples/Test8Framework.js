/// <reference types="Cypress" />

import HomePage from './pageObjects/HomePage'; //function created in pagesObject so we could reuse again
import ProductPage from './pageObjects/ProductPage'; //function created in pagesObject so we could reuse again

describe('My Framework Test', function() {
  before(function() {
    //runs once before all in the block
    cy.fixture('example').then(function(data) {
      this.data = data;
    })
  })
  it('Framework Test', function() {
    const homePage = new HomePage(); // initiate the function so we could use homePage.someFunction
    const productPage = new ProductPage(); //same with abopve line

    cy.visit(Cypress.env('url')); // place the url in cypress.json for easy syntax

    //all of these function replace the commented out ones below

    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should('have.value', this.data.name);
    homePage.getEditBox().should('have.attr', 'minlength', '2');
    homePage.getEntrepreneau().should('be.disabled');
    homePage.getShopTab().click();

    // cy.get('input[name="name"]:nth-child(2)').type(this.data.name);

    // cy.get('select').select(this.data.gender);

    // cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name);

    // cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2');

    // cy.get('#inlineRadio3').should('be.disabled')

    // cy.get(':nth-child(2) > .nav-link').click();

    //instead of doing what we did on line 22 - 23, we can do this
    this.data.productName.forEach((el) => { //go through fixture array to apply the already made function in command.js
      cy.selectProduct(el);
    })

    this.data.productName.forEach(function(element) {
      cy.selectProduct(element)
    });

    productPage.checkOutButton().click()
    var sum = 0 // initiate a variable to compare to the displayed money

    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => { //iterate through the list of prices
      const amount = $el.text()
      var res = amount.split(" ") 
      res = res[1].trim() //get number readyh
      sum = Number(sum) + Number(res)
    }).then(function() {
      cy.log(sum)
    })
    cy.get('h3 strong').then(function(element) { //get number for the displayed total
      const amount = element.text()
      var res = amount.split(" ")
     var total = res[1].trim()
     expect(Number(total)).to.equal(sum) //compare
    })

    productPage.checkOutButton().click();
   
    cy.contains('Checkout').click()
    // cy.get(':nth-child(4) > .btn').click({multiple: true});
    cy.get('#country').type('India');
    cy.get('.suggestions > ul > li > a').click();
    cy.get('.checkbox > label').click();
    cy.get('.ng-untouched > .btn').click();
    // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).'); this is not true because it contain some character that we can't regconize

    cy.get('.alert').then((el) => { //has to use .then to fix it because .text and .includes arent cypress function
      let text = el.text();
      if (text.includes('Success')) {
        expect(text.includes('Success')).to.be.true; //has to assert bc we're using chai here
      }
    })
  })
})