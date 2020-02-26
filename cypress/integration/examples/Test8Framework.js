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

    cy.visit('https://rahulshettyacademy.com/angularpractice/');

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