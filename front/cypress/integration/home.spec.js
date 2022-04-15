// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('renders the page', () => {
    cy.visit('/')
    cy.contains('this is a sweet message')
    cy.contains('**this is a sweet message**')
  })

  it('counter works', () => {
    cy.visit('/')
    cy.contains('#value', '0')
    cy.get('button').trigger('click')
    cy.contains('#value', '1')
  })
})
