Feature: End to End E-commerce website

    Scenario: E-commerce wesbite with products
        Given User opens ecommerce landing page
        When User adds login information
        When User selects the products and add it to the cart
        Then Validate the total price of all the products

     