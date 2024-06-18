import {Given, When, Then} from "@cypress/browserify-preprocessor"

Given("User opens ecommerce landing page",function(){
    cy.visit(Cypress.env('url')+"angularpractice/")
})

When("User adds login information",function(){
    cy.get("input[name='name']:nth-child(2)").type(this.data.name)
    cy.get("input[name='email']").type(this.data.email);
    cy.get("input[type='password']").type(this.data.password)
    cy.get(".btn").click();
    cy.get("input[type='text']:nth-child(1)").should('have.value',"Chris");
    cy.get(".alert strong").should('have.text',"Success!");
    cy.get(".navbar-nav li:nth-child(2)").click()
})

When("User selects the products and add it to the cart",function(){
    this.data.prodName.forEach(function(element){
        cy.Products(element)
      })
      cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').as('checkout').should('contain',"Checkout");
      cy.get('@checkout').click();

})
Then("Validate the total price of all the products",function(){
    cy.get("tr td:nth-child(4) strong").each(($el,index,$list)=>{
        const amounts = $el.text();
        var result = amounts.split(" ");
        result  = result[1].trim()
        sum = Number(sum) + Number(result)
      }).then(function(){
        cy.log(sum)
      })

      cy.get("h3 strong").then(function($el){
        const tot = $el.text()
        var total = tot.split(" ")
        total = total[1].trim()
        cy.log(total)
        expect(Number(total)).to.be.equal(sum);

      })
})
