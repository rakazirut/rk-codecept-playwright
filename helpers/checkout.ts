const { I } = inject();

/**
 * Checkout step 1 fuction for swaglabs
 *
 * @param {string} first - username for swaglabs for checkout step 1
 * @param {string} last - password for swaglabs for checkout step 1
 * @param {string} zip - zip code for swaglabs for checkout step 1
 * @return {void}
 *
 * @example
 *
 *     checkoutStepOne('first', 'last', 'zip')
 */
function checkoutStepOne(first: string, last: string, zip: string): void {
  I.waitForElement("$firstName");
  if (first != null) {
    I.fillField("$firstName", first);
  }
  if (last != null) {
    I.fillField("$lastName", last);
  }
  if (zip != null) {
    I.fillField("$postalCode", zip);
  }
  I.click("$continue");
}

export = { checkoutStepOne };
