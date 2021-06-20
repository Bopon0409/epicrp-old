const authData = active => JSON.stringify({ active: active })
const autoLoginData = JSON.stringify({
  active: true, autoLogin: true, login: 'login'
})

const setAuthActive = active => window.trigger('auth.toggle', authData(active))

const autoLogin = () => window.trigger('auth.toggle', autoLoginData)

const testAuthAnswer = (result = false, error = 'Ошибка') => {
  window.trigger('auth.authAnswer', JSON.stringify({ result, error }))
}

const testRegisterAnswer = (result = false, error = 'Ошибка') => {
  window.trigger('auth.registerAnswer', JSON.stringify({ result, error }))
}

window.test.auth = {
  setAuthActive, testAuthAnswer, testRegisterAnswer, autoLogin
}
