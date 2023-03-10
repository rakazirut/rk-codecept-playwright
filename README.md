# RK CodeceptJS-Playwright demo project

[![RK CodeceptJS-Playwright CI](https://github.com/rakazirut/rk-codecept-playwright/actions/workflows/node.js.yml/badge.svg)](https://github.com/rakazirut/rk-codecept-playwright/actions/workflows/node.js.yml)

## Description
This test suite utilizes [codeceptjs](https://codecept.io/) and [playwright](https://playwright.dev/) to perform UI automation tests against [swaglabs](https://www.saucedemo.com/).

## How to clone the project

1. Clone the repository
2. Use NPM to install dependancies
    -  `npm i`

## Running Tests
This project utilizes playwright for handling api tests. Simply use command `npx codeceptjs run` to run all test specs or you can specify a spec file to run for example `npx codeceptjs run ./spec/login.spec.ts` to run all login tests. To tun test specs in parallel use a command such as `npx codeceptjs run-workers 2`.

## Included Scenarios
Cart --
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
  - √ Login attempt without providing username or password
  - √ Login attempt without providing username
  - √ Login attempt without providing password
  - √ Unsuccessful login due to invalid password
  - √ Unsuccessful login with locked out user
  - √ Unsuccessful login with invalid user
  - √ Successfully login with standard user
  - √ Successfully login and logout with standard user

Product List --
  - √ Verify A to Z sort
  - √ Verify Z to A sort
  - √ Verify price low to high sort
  - √ Verify price high to low sort
  - √ View Product Detail via inventory title
  - √ View Product Detail via inventory image
  - √ Navigate back to product list from product detail

## Swaglab 'Bugs'
1. User can checkout without any items selected
2. There are no constraints for user information at checkout, for example the number of characters that can be accommodated, a combination of characters or numbers for names, zip code can be non-numeric
3. User cannot add to the quantity of items chosen, only 1 per item

---
## Credits
Test suite created by [Rob Kazirut](https://github.com/rakazirut) with help from the following:

- [CodeceptJS](https://codecept.io/quickstart/) - CodeceptJS documentation

- [Playwright](https://playwright.dev/docs/intro) - Playwright documentation