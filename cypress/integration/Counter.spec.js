context('ActionZXYA', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234')
  })

  it('has the proper heading', () => {
    cy.get('.widget-counter h2')
      .should('have.text', 'Counter')
  })
  it('has an increment button', () => {
    cy.contains('Increment')
  })
  it('has an decrement button', () => {
    cy.contains('Decrement')
  })
  it('has a reset button', () => {
    cy.contains('Reset')
  })
})
