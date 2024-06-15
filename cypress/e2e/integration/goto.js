/// <reference types = "Cypress" />
require('dotenv').config();
describe('First test case', function(){
  
it('Navigation', function(){
  cy.visit(process.env("URL"))
  cy.get('.login_logo').should('contain','Swag Labs')
  cy.wait(5000)
})

// it('Login with valid credentials', function(){
//   cy.visit('https://saucedemo.com/')
//   cy.get('#user-name').type('standard_user')
//   cy.get('#password').type('secret_sauce')
//   cy.get('#login-button').click()
// })
})
 

// export {}
// //require('dotenv').config
// describe('Login and Logout Page Test', function() //acting as test suite 
// {
//      it('Open Analytics Dashboard', function() //acting test cases under test suites
//     {
//      cy.visit('http://localhost:8081/')
//      cy.viewport(1440, 760)
//     })
//     it('Login by entering Username and Password', function() //acting test cases under test suites
//     {
//       cy.visit('http://localhost:8081/')
//       cy.fixture('Login|Logout.json').then((locators) => {
//           cy.get(locators.UsernameBox).type(Cypress.env('username'))
//           cy.get(locators.PasswordBox).type(Cypress.env('password'),{log : false})
//           cy.get(locators.SubmitBtn).click()
//           cy.wait(20000)
//           cy.get(locators.ProfilePic).click()
//           cy.get(locators.SignoutBtn).click()
//     })
// })
// });