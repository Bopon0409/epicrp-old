const setAuthActive = active => window.trigger('auth.toggle', active)
const testAuthAnswer = (data = false) => window.trigger('auth.authAnswer', data)
const testRegisterAnswer = (data = false) =>
  window.trigger('auth.registerAnswer', data)

export { setAuthActive, testAuthAnswer, testRegisterAnswer }
