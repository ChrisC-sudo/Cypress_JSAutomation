/// <reference types = "Cypress" />

describe('First test case', function(){
  
it('Navigation', function(){
  cy.visit('https://saucedemo.com/')
  cy.get('#user-name').type('standard_user')
  cy.get('#password').type('secret_sauce')
  cy.get('.login_logo').should('contain','Swag Labs')
  cy.get('#login-button').click()
})
})