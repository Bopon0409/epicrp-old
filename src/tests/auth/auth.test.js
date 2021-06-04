const authData = active => JSON.stringify({ active: active })
const autoLoginData = JSON.stringify({
  active: true, autoLogin: true, login: 'login'
})

const setAuthActive = active => window.trigger('auth.toggle', authData(active))

const autoLogin = () => window.trigger('auth.toggle', autoLoginData)

const testAuthAnswer = (result = false) => {
  window.trigger('auth.authAnswer', result)
}

const testRegisterAnswer = (result = false) => {
  window.trigger('auth.registerAnswer', result)
}

window.test.auth = {
  setAuthActive, testAuthAnswer, testRegisterAnswer, autoLogin
}
