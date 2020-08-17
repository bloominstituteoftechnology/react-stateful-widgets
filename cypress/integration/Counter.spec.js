describe('Counter', () => {
  it('navigate to the site', () => {
    cy.visit('http://localhost:1234')
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
  it('displays the correct initial message', () => {
    cy.contains('Number 0 is even', { matchCase: false })
  })
  it('increments the count', () => {
    cy.contains('Increment').click()
    cy.contains('Number 0 is even', { matchCase: false }).should('not.exist')

    cy.contains('Number 1 is odd', { matchCase: false })
    cy.contains('Increment').click()
    cy.contains('Number 2 is even', { matchCase: false })
    cy.contains('Increment').click()
    cy.contains('Number 3 is odd', { matchCase: false })
  })
  it('decrements the count', () => {
    cy.contains('Decrement').click()
    cy.contains('Number 2 is even', { matchCase: false })
    cy.contains('Decrement').click()
    cy.contains('Number 1 is odd', { matchCase: false })
  })
  it('resets the count', () => {
    cy.contains('Reset').click()
    cy.contains('Number 0 is even', { matchCase: false })
  })
})
