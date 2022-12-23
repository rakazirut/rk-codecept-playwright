export {};
const { loginSteps } = inject();
Feature("Checkout");

Before(({ I }) => {
  loginSteps.login("standard_user", "secret_sauce");
  I.seeInCurrentUrl("/inventory");
});

Scenario("Add item to the cart", async ({ I }) => {
  I.click("$add-to-cart-sauce-labs-backpack");
  I.see("1", ".shopping_cart_badge");
});

Scenario("View item in the cart", async ({ I }) => {
  let item = await I.grabTextFrom(".inventory_item_name");
  I.click("$add-to-cart-sauce-labs-backpack");
  I.see("1", ".shopping_cart_badge");
  I.click(".shopping_cart_container");
  I.seeInCurrentUrl("/cart");
  I.see(item, ".cart_item");
});

Scenario("Remove item from cart from product list", async ({ I }) => {
  I.click("$add-to-cart-sauce-labs-backpack");
  I.see("1", ".shopping_cart_badge");
  I.click("$remove-sauce-labs-backpack");
  I.dontSeeElement(".shopping_cart_badge");
});

Scenario("Remove item from cart from cart", async ({ I }) => {
  let item = await I.grabTextFrom(".inventory_item_name");
  I.click("$add-to-cart-sauce-labs-backpack");
  I.see("1", ".shopping_cart_badge");
  I.click(".shopping_cart_container");
  I.seeInCurrentUrl("/cart");
  I.see(item, ".cart_item");
  I.click("$remove-sauce-labs-backpack");
  I.dontSeeElement(".cart_item");
  I.dontSeeElement(".shopping_cart_badge");
});

Scenario("View product details from cart", async ({ I }) => {
  I.click("$add-to-cart-sauce-labs-backpack");
  I.see("1", ".shopping_cart_badge");
  I.click(".shopping_cart_container");
  I.seeInCurrentUrl("/cart");
  I.click(".inventory_item_name");
  I.seeInCurrentUrl("/inventory-item");
});

Scenario("Click checkout button", async ({ I }) => {
  I.click("$add-to-cart-sauce-labs-backpack");
  I.see("1", ".shopping_cart_badge");
  I.click(".shopping_cart_container");
  I.seeInCurrentUrl("/cart");
  I.click("$checkout");
  I.seeInCurrentUrl("/checkout-step-one");
});
