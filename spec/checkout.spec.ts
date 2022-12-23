export {};
const { loginSteps, checkoutSteps } = inject();
Feature("Checkout");

const firstName:string = "Robert"
const lastName:string = "Kazirut"
const zipCode:string = "54321"

Before(async ({ I }) => {
  loginSteps.login("standard_user", "secret_sauce");
  I.seeInCurrentUrl("/inventory");
  await I.executeScript(() => {
    localStorage.setItem("cart-contents", "[4]");
  });
});

Scenario("Click Continue without providing any information", async ({ I }) => {
  I.amOnPage("/checkout-step-one.html");
  checkoutSteps.checkoutStepOne(null, null, null);
  I.see("Error: First Name is required", "$error");
});

Scenario("Click Continue without providing first name", async ({ I }) => {
  I.amOnPage("/checkout-step-one.html");
  checkoutSteps.checkoutStepOne(null, lastName, zipCode);
  I.see("Error: First Name is required", "$error");
});

Scenario("Click Continue without providing last name", async ({ I }) => {
  I.amOnPage("/checkout-step-one.html");
  checkoutSteps.checkoutStepOne(firstName, null, zipCode);
  I.see("Error: Last Name is required", "$error");
});

Scenario("Click Continue without providing zip code", async ({ I }) => {
  I.amOnPage("/checkout-step-one.html");
  checkoutSteps.checkoutStepOne(firstName, lastName, null);
  I.see("Error: Postal Code is required", "$error");
});

Scenario("Click Continue after providing required information", async ({ I }) => {
  I.amOnPage("/checkout-step-one.html");
  checkoutSteps.checkoutStepOne(firstName, lastName, zipCode);
  I.seeInCurrentUrl("/checkout-step-two");
});

Scenario("View product details from checkout step two", async ({ I }) => {
  I.amOnPage("/checkout-step-one.html");
  checkoutSteps.checkoutStepOne(firstName, lastName, zipCode);
  I.seeInCurrentUrl("/checkout-step-two");
  I.click(".inventory_item_name");
  I.seeInCurrentUrl("/inventory-item");
});

Scenario("Click cancel button from checkout step two", async ({ I }) => {
  I.amOnPage("/checkout-step-one.html");
  checkoutSteps.checkoutStepOne(firstName, lastName, zipCode);
  I.seeInCurrentUrl("/checkout-step-two");
  I.click("$cancel");
  I.seeInCurrentUrl("/inventory");
});

Scenario("Click finish button from checkout step two", async ({ I }) => {
  I.amOnPage("/checkout-step-one.html");
  checkoutSteps.checkoutStepOne(firstName, lastName, zipCode);
  I.seeInCurrentUrl("/checkout-step-two");
  I.click("$finish");
  I.seeInCurrentUrl("/checkout-complete");
});

Scenario("Click Back Home button from checkout complete", async ({ I }) => {
  I.amOnPage("/checkout-step-one.html");
  checkoutSteps.checkoutStepOne(firstName, lastName, zipCode);
  I.seeInCurrentUrl("/checkout-step-two");
  I.click("$finish");
  I.seeInCurrentUrl("/checkout-complete");
  I.click("$back-to-products");
  I.seeInCurrentUrl("/inventory");
});