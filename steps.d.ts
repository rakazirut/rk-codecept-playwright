/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type loginSteps = typeof import('./helpers/login');
type checkoutSteps = typeof import('./helpers/checkout');
type ChaiWrapper = import ('codeceptjs-chai')

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginSteps: loginSteps, checkoutSteps: checkoutSteps }
  interface Methods extends PlaywrightTs {}
  interface Methods extends ChaiWrapper {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
