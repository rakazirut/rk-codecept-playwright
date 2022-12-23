const { I } = inject();

/**
 * Login fuction for swaglabs
 *
 * @param {string} user - username for swaglabs
 * @param {string} pass - password for swaglabs
 * @return {void}
 *
 * @example
 *
 *     login('username', 'password')
 */
function login(user: string, pass: string): void {
  I.amOnPage("/");
  I.waitForElement("#user-name");
  I.fillField("$username", user);
  I.fillField("$password", pass);
  I.click("$login-button");
}

export = { login };
