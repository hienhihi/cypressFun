describe('My First Test', function() {
  it("Does not do much!",  function() {
    expect(true).to.equal(true)
  })
  it('Second case', function() {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
  })
}) 