const setAuthActive = active => window.trigger('setAuthActive', active)
const testAuthAnswer = data => window.trigger('userAuthAnswer', data)
const testRegisterAnswer = data => window.trigger('userRegisterAnswer', data)

export { setAuthActive, testAuthAnswer, testRegisterAnswer }
