/// <reference types = "Cypress" />
import 'cypress-iframe'

describe('Practicing elements', function () {

    it("Checkbox Test", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.value', 'option1');
        cy.get("#checkBoxOption1").uncheck();
        cy.get("input[type='checkbox']").check(['option1', 'option2', 'option3'])
        cy.get("input[type='checkbox']").uncheck(['option1', 'option2', 'option3'])
    })

    it("DropDown Test static and dynamic", function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // cy.get("#dropdown-class-example").select('option3').should('have.value','option3');

        cy.get("#autocomplete").type("Ch");
        cy.get(".ui-menu-item").find('.ui-menu-item-wrapper').each(($el, index, $list) => {
            if ($el.text() === "Taiwan, Province of China") {
                cy.wrap($el).click().should("have.text", "Taiwan, Province of China")
            }
        })
    })

    it("Handling web tables", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("table[class='table-display'] tr td:nth-child(2)").each(($el, index, $list) => {
            const getText = $el.text();
            if (getText.includes("Python Language")) 
                {
                cy.get("table[class='table-display'] tr td:nth-child(2)").eq(index).next().then(function (price) {
                    const PriceText = price.text()
                    expect(PriceText).to.equal('25')
                    expect(getText).include('Python')
                })
            } 
        })
    })
    it("Handling frames", function(){
        // cy.visit(Cypress.env('url'));
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.frameLoaded("#courses-iframe");
        cy.iframe().find("a[href='consulting']").eq(0).click();

    })

    it.only("Calendar Verification", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    })

});