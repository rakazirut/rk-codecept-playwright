require("ts-node/register");
import { setHeadlessWhen, setCommonPlugins } from "@codeceptjs/configure";
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: "./spec/*.spec.ts",
  output: "./output",
  helpers: {
    Playwright: {
      url: "https://www.saucedemo.com",
      show: false,
      browser: "chromium",
    },
    ChaiWrapper: {
      require: "codeceptjs-chai",
    },
  },
  plugins: {
    customLocator: {
      enabled: true,
      attribute: "data-test",
    },
  },
  include: {
    loginSteps: "./helpers/login.ts",
    checkoutSteps: "./helpers/checkout.ts",
  },
  name: "codecept-playwright",
};
