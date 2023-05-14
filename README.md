# TestAutomationExercise
**Automation Test (POM) on automationexercise.com using Cypress.**

Here is my work on Automation Testing on automationexercise.com using Cypress. All web element locators can be found in "**cypress/PageObjects/page_objects.js**" and the action methods can be found in "**cypress/e2e/test_action_specs.cy.js**". POM was used to reduce code duplication and improve test maintenance. The following steps are tested:

1. Visit automationexercise.com
2. Sign Up with all the required and non required fields
3. Select product and add it to the cart
4. From the cart proceed to checkout
5. Add dummy payment data
6. Confirm placing the order

Please note that **single use temporary email** has been passed to complete signup. **A new email must be entered to complete signup each time**.
