import Objects from "../PageObjects/page_objects";


describe('automationexercise', () => {

    it('AETest', () => {
        
        
        cy.visit('https://automationexercise.com/')

        const ln=new Objects();

        ln.navigateSignup();
        ln.verifyLoginSignupPage();
        ln.setName("Test");
        ln.setEmail("qonuvyxa@afia.pro");                     //Single use temp-mail
        ln.clickSignupButton();
        ln.verifySignupPage();
        ln.setRadioButtonMale();
        ln.setPassword("Abcd1234");
        ln.setDOB("18", "January", "2000");
        ln.setNewsLetter();
        ln.setOptin();
        ln.setFirstName("Muntanuz");
        ln.setLastName("Zaman");
        ln.setCompany("AIUB");
        ln.setAddress1("Hatem Khan");
        ln.setAddress2("Boalia");
        ln.setCountry("India");
        ln.setState("Rajshahi");
        ln.setCity("Rajshahi City");
        ln.setZipCode("6000");
        ln.setMobileNumber("01733333333");
        ln.clickCreateAccountButton();
        ln.verifyAccountCreatedPage();
        ln.clickContinueButton();
        ln.navigateProducts();
        ln.verifyProductsPage();
        ln.selectProductMouseover();
        ln.selectProductManual();
        ln.verifyCheckoutPage();
        ln.clickProceedToCheckoutButton();
        ln.setComment("Nice");
        ln.clickPlaceOrderButton();
        ln.verifyPaymentPage();
        ln.setNameOnCard("Muntanuz Zaman");
        ln.setCardNumber("1234567890");
        ln.setCVC("666");
        ln.setExpiration("06","3033");
        ln.clickConfirmButton();
        ln.verifyOrderPlacedPage();
        ln.clickContinueButton();





    })

})