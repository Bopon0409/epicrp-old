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
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
      quidem dolores quaerat animi iusto distinctio!`
      },
      {
        id: 1,
        title: 'Новость',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
      quidem dolores quaerat animi iusto distinctio!`
      },
      {
        id: 2,
        title: 'Новость',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
      quidem dolores quaerat animi iusto distinctio!`
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

  setAuthActive = active => (this.state.active = active)
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
}

export default new AuthStore()
