
describe('My 5th test', function() {
  it('My 5t test', function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => { //go to the second collumn
      const text = $el.text();
      if ( text.includes('Python')) {
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) { //go to the second collumn at this specific index, then move 1 to the right to the same index, at collumn +1
          const priceText = price.text();
          expect(priceText).to.equal('25');
        })
      }
    })
  })
})