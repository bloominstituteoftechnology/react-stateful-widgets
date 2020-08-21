import { crimson, royalblue } from '../constants'

describe('Counter', () => {
  const count = () => cy.get('[id=count]')
  const increment = () => cy.get('[id=increment]')
  const decrement = () => cy.get('[id=decrement]')
  const reset = () => cy.get('[id=reset]')

  beforeEach(() => {
    cy.visit('/')
  })

  describe(`Counter initial state
    These tests should be passing from the start!`, () => {
    it('contains the required elements', () => {
      decrement().should('exist')
      increment().should('exist')
    })
    it('colors and text content are what they should be', () => {
      reset().should('exist')
      count().should('contain', 'Number 0 is even')
      count().should('have.css', 'color', royalblue)
    })
  })

  describe('Counter tests', () => {
    it('can increment the count', () => {
      increment().click()
      count().should('contain', 'Number 1 is odd')
      increment().click()
      count().should('contain', 'Number 2 is even')
      increment().click()
      count().should('contain', 'Number 3 is odd')
    })
    it('decrements the count', () => {
      increment().click()
      increment().click()
      increment().click()
      // setup end
      decrement().click()
      count().should('contain', 'Number 2 is even')
      decrement().click()
      count().should('contain', 'Number 1 is odd')
      decrement().click()
      count().should('contain', 'Number 0 is even')
    })
    it('resets the count', () => {
      increment().click()
      increment().click()
      increment().click()
      // setup end
      reset().click()
      count().should('contain', 'Number 0 is even')
    })
    it('can render the message in the correct color', () => {
      increment().click()
      count().should('have.css', 'color', crimson)
      increment().click()
      count().should('have.css', 'color', royalblue)
    })
  })
})
