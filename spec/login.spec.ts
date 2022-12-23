export {};
const { loginSteps } = inject();

Feature("Login");

Scenario(
  "Login attempt without providing username or password",
  async ({ I }) => {
    loginSteps.login(null, null);
    I.see("Epic sadface: Username is required", "$error");
  }
);

Scenario("Login attempt without providing username", async ({ I }) => {
  loginSteps.login(null, "secret_sauce");
  I.see("Epic sadface: Username is required", "$error");
});

Scenario("Login attempt without providing password", async ({ I }) => {
  loginSteps.login("standard_user", null);
  I.see("Epic sadface: Password is required", "$error");
});

Scenario("Unsuccessful login due to invalid password", async ({ I }) => {
  loginSteps.login("standard_user", "wrong_pass");
  I.see(
    "Epic sadface: Username and password do not match any user in this service",
    "$error"
  );
});

Scenario("Unsuccessful login with locked out user", async ({ I }) => {
  loginSteps.login("locked_out_user", "secret_sauce");
  I.see("Epic sadface: Sorry, this user has been locked out.", "$error");
});

Scenario("Unsuccessful login with invalid user", async ({ I }) => {
  loginSteps.login("not_exist", "secret_sauce");
  I.see(
    "Epic sadface: Username and password do not match any user in this service",
    "$error"
  );
});

Scenario("Successfully login with standard user", async ({ I }) => {
  loginSteps.login("standard_user", "secret_sauce");
  I.seeInCurrentUrl("/inventory");
});

Scenario("Successfully login and logout with standard user", async ({ I }) => {
  loginSteps.login("standard_user", "secret_sauce");
  I.seeInCurrentUrl("/inventory");
  I.click(".bm-burger-button");
  I.click("#logout_sidebar_link");
  I.seeInCurrentUrl("/");
});
