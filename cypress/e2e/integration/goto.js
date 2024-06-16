/// <reference types = "Cypress" />
// require('dotenv').config();

describe("Test suite for automation practice", function(){

  it("First test case", function()
  {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("h1").should('have.text',"Practice Page");
    cy.title().should('eq', 'Practice Page')
  })
  
  it("hide and show plus input test",function()
  {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#displayed-text").type("Chris");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");
  })

it("Iteration thru the same element name",function()
  {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("div[style='text-align: right;margin-top: -30px;']").find('button').each(($el,index,$list)=>
      {
      const login = $el.text()
      if(login.includes('Home'))
        {
          cy.wrap($el).click()
        }
    })
  })

  it("promise test", function()
  {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get(".logoClass").then(function(logoelement){
      cy.wrap(logoelement).click();
    })
  })
}); 