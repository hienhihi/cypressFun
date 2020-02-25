/// <reference types="Cypress" />

describe('My First Test', function() {
  it('Visit website', function() {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/'); //go to website
    cy.get('.search-keyword').type('ca'); //find all items that starts with ca
    cy.wait(2000); //wait a bit
    cy.get('.product:visible').should('have.length', 4); // check for correct length of display item
    cy.get('.products').as('productLocator'); //create an alias, later can use this name to refer to this element
    cy.get('.products').find('.product').should('have.length', 4); //same with line above
    // cy.get(':nth-child(2) > .product-action > button').click(); //find the 2nd item and click
    cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click(); //same with above
    console.log('sf'); //asynchronous, this will be printed first, can avoid this pattern by putting it in a then function
    cy.get('.products').find('.product').each(($el, index, $list) => { //write a for loop and find specific text, 
      const textVeg = $el.find('h4.product-name').text(); //if yes, do action, just like vanilla javascript
      if (textVeg.includes('Cashews')) {
        $el.find('button').click()
      }
    })

    cy.get('.brand').should('have.text', 'GREENKART');

    cy.get('.brand').then(function(logoElement) { //text is a jQuery method, so it wouldn't work
      cy.log(logoElement.text()) //can't put this outside bc it's asynchronous and wait for the 
    }) //previous line to execute, need ot manually put it into asynchronous function to wait.
    cy.log('hello')
  })
})