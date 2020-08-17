describe('Counter', () => {
  const number0 = () => cy.contains('Number 0 is even', { matchCase: false })
  const number1 = () => cy.contains('Number 1 is odd', { matchCase: false })
  const number2 = () => cy.contains('Number 2 is even', { matchCase: false })
  const number3 = () => cy.contains('Number 3 is odd', { matchCase: false })
  const increment = () => cy.contains('Increment')
  const decrement = () => cy.contains('Decrement')
  const reset = () => cy.contains('Reset')

  it('navigate to the site', () => {
    cy.visit('http://localhost:1234')
  })
  it('has an increment button', () => {
    increment().should('exist')
  })
  it('has an decrement button', () => {
    decrement().should('exist')
  })
  it('has a reset button', () => {
    reset().should('exist')
  })
  it('displays the correct initial message', () => {
    number0().should('exist')
  })
  it('increments the count', () => {
    increment().click()
    number0().should('not.exist')
    number1().should('exist')
    increment().click()
    number1().should('not.exist')
    number2().should('exist')
    increment().click()
    number2().should('not.exist')
    number3().should('exist')
  })
  it('decrements the count', () => {
    decrement().click()
    number3().should('not.exist')
    number2().should('exist')
    decrement().click()
    number2().should('not.exist')
    number1().should('exist')
  })
  it('resets the count', () => {
    reset().click()
    number1().should('not.exist')
    number0().should('exist')
  })
  it('can render the message in the correct color', () => {
    number0().should('have.attr', 'style', 'font-size: 1.5em; margin-bottom: 0.3em; color: royalblue;')
    increment().click()
    number1().should('have.attr', 'style', 'font-size: 1.5em; margin-bottom: 0.3em; color: crimson;')
    increment().click()
    number2().should('have.attr', 'style', 'font-size: 1.5em; margin-bottom: 0.3em; color: royalblue;')
  })
})
