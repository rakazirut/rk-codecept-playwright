# RK CodeceptJS-Playwright demo project

## Description
This test suite utilizes [codeceptjs](https://codecept.io/) and [playwright](https://playwright.dev/) to perform UI automation tests against [swaglabs](https://www.saucedemo.com/).

## How to clone the project

1. Clone the repository
2. Use NPM to install dependancies
    -  `npm i`

## Running Tests
This project utilizes playwright for handling api tests. Simply use command `npx codeceptjs run` to run all test specs or you can specify a spec file to run for example `npx codeceptjs run ./spec/login.spec.ts` to run all login tests.

## Included Scenarios
Checkout --
  - √ Add item to the cart
  - √ View item in the cart
  - √ Remove item from cart from product list
  - √ Remove item from cart from cart
  - √ View product details from cart
  - √ Click checkout button

Checkout --
  - √ Click Continue without providing any information
  - √ Click Continue without providing first name
  - √ Click Continue without providing last name
  - √ Click Continue without providing zip code
  - √ Click Continue after providing required information
  - √ View product details from checkout step two
  - √ Click cancel button from checkout step two
  - √ Click finish button from checkout step two
  - √ Click Back Home button from checkout complete

Login --
  - √ Successfully login with standard user
  - √ Unsuccessful login due to invalid password
  - √ Unsuccessful login with locked out user
  - √ Unsuccessful login with invalid user

Product List --
  - √ Verify A to Z sort
  - √ Verify Z to A sort
  - √ Verify price low to high sort
  - √ Verify price high to low sort
  - √ View Product Detail via inventory title
  - √ View Product Detail via inventory image
  - √ Navigate back to product list from product detail

---
## Credits
Test suite created by [Rob Kazirut](https://github.com/rakazirut) with help from the following:

- [CodeceptJS](https://codecept.io/quickstart/) - CodeceptJS documentation

- [Playwright](https://playwright.dev/docs/intro) - Playwright documentation