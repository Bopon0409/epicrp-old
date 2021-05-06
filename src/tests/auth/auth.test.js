const setAuthActive = active => window.trigger('auth.toggle', active)
const testAuthAnswer = (result = false) =>
  window.trigger('auth.authAnswer', result)
const testRegisterAnswer = (result = false) =>
  window.trigger('auth.registerAnswer', result)

window.test.auth = { setAuthActive, testAuthAnswer, testRegisterAnswer }
