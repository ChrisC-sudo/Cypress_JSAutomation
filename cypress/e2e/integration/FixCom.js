///<reference types = 'Cypress'/>

describe("Hooks and fixtures", function(){
    
    before(function(){
        cy.fixture("data").then(function(data){
            this.data=data;
        })
      })

    it("Hooks test", function(){
        cy.visit(Cypress.env('url')+"angularpractice/")
        cy.get("input[name='name']:nth-child(2)").type(this.data.name)
        cy.get("input[name='email']").type(this.data.email);
        cy.get("input[type='password']").type(this.data.password)
        cy.get(".btn").click();
        cy.get("input[type='text']:nth-child(1)").should('have.value',"Chris");
        cy.get(".alert strong").should('have.text',"Success!");
        cy.get(".navbar-nav li:nth-child(2)").click()
        // cy.Products("Blackberry")

      this.data.prodName.forEach(function(element){
        cy.Products(element)
      })

      cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').as('checkout').should('contain',"Checkout");
      cy.get('@checkout').click();
      var sum = 0;

      cy.get("tr td:nth-child(4) strong").each(($el,index,$list)=>{
        // cy.log($el.text());
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
})