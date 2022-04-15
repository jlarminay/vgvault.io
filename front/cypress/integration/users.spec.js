// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('renders the page', () => {
    cy.visit('/users')
    cy.contains('Status:')
  })

  it('button changes status', () => {
    cy.visit('/users')
    cy.contains('ready')
    cy.get('button').trigger('click')
    cy.contains('loading')
  })
})
