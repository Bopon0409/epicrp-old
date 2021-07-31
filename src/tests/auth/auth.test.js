const authData = active => JSON.stringify({ active: active })

// Данные авто логина
const autoLoginData = JSON.stringify({
  active: true, autoLogin: true, login: 'login'
})

// Включение/выключение без авто логина
const setActive = active => window.trigger('auth.toggle', authData(active))

// Включение/выключение с авто логином
const autoLogin = () => window.trigger('auth.toggle', autoLoginData)

// Ответ сервера при ошибке авторизации
const testAuthAnswer = (result = false, error = 'Ошибка') => {
  window.trigger('auth.authAnswer', JSON.stringify({ result, error }))
}

// Ответ сервера при ошибке регистрации
const testRegisterAnswer = (result = false, error = 'Ошибка') => {
  window.trigger('auth.registerAnswer', JSON.stringify({ result, error }))
}

window.test.auth = {
  setActive, testAuthAnswer, testRegisterAnswer, autoLogin
}
