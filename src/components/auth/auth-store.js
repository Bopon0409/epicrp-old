import { makeAutoObservable } from 'mobx'

class AuthStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  ERROR_MESSAGES = [
    'В логине должны быть только латинские буквы и цифры',
    'В логине должен быть от 4 до 20 символов',
    'Логине должен начинаться с буквы',
    'Пароль должен быть не менее 6 символов, и состоять только из латинских символов и цифр',
    'Пароли не совпадают',
    'Некорректный email'
  ]

  state = {
    active: false,
    checkBox: false,
    isLogin: true,
    errorMsg: '',
    login: '',
    email: '',
    pass: '',
    pass2: '',
    news: [
      {
        id: 0,
        title: 'Новость',
        text: `Lorem ipsum dolor sit amet consecrated animistic elite. Cupidity
      quid dolores quart anime Giusto distinction!`
      },
      {
        id: 1,
        title: 'Новость',
        text: `Lorem ipsum dolor sit amet consecrated animistic elite. Cupidity
      quid dolores quart anime Giusto distinction!`
      },
      {
        id: 2,
        title: 'Новость',
        text: `Lorem ipsum dolor sit amet consecrated animistic elite. Cupidity
      quid dolores quart anime Giusto distinction!`
      }
    ]
  }

  clearInputs = () => {
    this.state.login = ''
    this.state.email = ''
    this.state.pass = ''
    this.state.pass2 = ''
    this.state.errorMsg = ''
  }

  setAuthActive = (active, autoLogin, login) => {
    this.state.active = active
    if (autoLogin) this.state.checkBox = autoLogin
    if (login) this.state.login = login
  }

  setErrorMsg = msg => (this.state.errorMsg = msg)

  setField = (fieldName, value) => (this.state[fieldName] = value)

  checkBoxToggle = () => (this.state.checkBox = !this.state.checkBox)

  loginToggle = () => {
    this.state.isLogin = !this.state.isLogin
    this.clearInputs()
  }

  authServerAnswer = isSuccess => {
    if (isSuccess) this.state.active = false
    else this.state.errorMsg = 'Неверный логин или пароль'
  }

  regServerAnswer = isSuccess => {
    if (isSuccess) {
      this.state.isLogin = true
      this.clearInputs()
    } else this.state.errorMsg = 'Такой пользователь уже существует'
  }

  enterHandler = event => {
    const { login, pass, pass2, email, isLogin, active } = this.state
    if (event.keyCode === 13 && active) {
      isLogin
        ? this.authValidate(login, pass)
        : this.registerValidate(email, login, pass, pass2)
    }
  }

  authValidate = () => {
    const { login, pass, checkBox } = this.state

    if (/^[a-zA-Z1-9]+$/.test(login) === false)
      return this.setErrorMsg(this.ERROR_MESSAGES[0])
    if (login.length < 4 || login.length > 20)
      return this.setErrorMsg(this.ERROR_MESSAGES[1])
    if (parseInt(login.substr(0, 1)))
      return this.setErrorMsg(this.ERROR_MESSAGES[2])
    if (/^[a-zA-Z1-9]{6,}$/i.test(pass) === false)
      return this.setErrorMsg(this.ERROR_MESSAGES[3])

    this.clearInputs()
    window.frontTrigger('auth.signIn', login, pass, checkBox)
  }

  registerValidate = () => {
    const { email, login, pass, pass2 } = this.state

    const emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
    if (emailRegExp.test(email) === false)
      return this.setErrorMsg(this.ERROR_MESSAGES[5])
    if (/^[a-zA-Z1-9]+$/.test(login) === false)
      return this.setErrorMsg(this.ERROR_MESSAGES[0])
    if (login.length < 4 || login.length > 20)
      return this.setErrorMsg(this.ERROR_MESSAGES[1])
    if (parseInt(login.substr(0, 1)))
      return this.setErrorMsg(this.ERROR_MESSAGES[2])
    if (/^[a-zA-Z1-9]{6,}$/i.test(pass) === false)
      return this.setErrorMsg(this.ERROR_MESSAGES[3])
    if (pass !== pass2) return this.setErrorMsg(this.ERROR_MESSAGES[4])

    this.clearInputs()
    window.frontTrigger('auth.signUp', login, email, pass)
  }
}

export default new AuthStore()
