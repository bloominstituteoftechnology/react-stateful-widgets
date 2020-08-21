import { crimson, royalblue } from '../constants'
import { normalize } from '../helpers'

describe('Counter', () => {
  const count = () => cy.get('[id=count]')
  const increment = () => cy.get('[id=increment]')
  const decrement = () => cy.get('[id=decrement]')
  const reset = () => cy.get('[id=reset]')

  const number_0_is_even = normalize('Number 0 is even')
  const number_1_is_odd = normalize('Number 1 is odd')
  const number_2_is_even = normalize('Number 2 is even')
  const number_3_is_odd = normalize('Number 3 is odd')

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
      count().should(e => {
        expect(normalize(e.text())).to.equal(number_0_is_even)
      })
      count().should('have.css', 'color', royalblue)
    })
  })

  describe('Counter tests', () => {
    it('can increment the count', () => {
      increment().click()
      count().should(e => {
        expect(normalize(e.text())).to.equal(number_1_is_odd)
      })
      increment().click()
      count().should(e => {
        expect(normalize(e.text())).to.equal(number_2_is_even)
      })
      increment().click()
      count().should(e => {
        expect(normalize(e.text())).to.equal(number_3_is_odd)
      })
    })
    it('decrements the count', () => {
      increment().click()
      increment().click()
      increment().click()
      // setup end
      decrement().click()
      count().should(e => {
        expect(normalize(e.text())).to.equal(number_2_is_even)
      })
      decrement().click()
      count().should(e => {
        expect(normalize(e.text())).to.equal(number_1_is_odd)
      })
      decrement().click()
      count().should(e => {
        expect(normalize(e.text())).to.equal(number_0_is_even)
      })
    })
    it('resets the count', () => {
      increment().click()
      increment().click()
      increment().click()
      // setup end
      reset().click()
      count().should(e => {
        expect(normalize(e.text())).to.equal(number_0_is_even)
      })
    })
    it('can render the message in the correct color', () => {
      increment().click()
      count().should('have.css', 'color', crimson)
      increment().click()
      count().should('have.css', 'color', royalblue)
    })
  })
})
