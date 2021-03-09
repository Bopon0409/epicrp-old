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

  store = {
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
        title: 'Новость',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
      quidem dolores quaerat animi iusto distinctio!`
      },
      {
        title: 'Новость',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
      quidem dolores quaerat animi iusto distinctio!`
      },
      {
        title: 'Новость',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
      quidem dolores quaerat animi iusto distinctio!`
      }
    ]
  }

  clearInputs = () => {
    this.store.login = ''
    this.store.email = ''
    this.store.pass = ''
    this.store.pass2 = ''
    this.store.errorMsg = ''
  }

  setAuthActive = active => (this.store.active = active)
  setErrorMsg = msg => (this.store.errorMsg = msg)
  setField = (fieldName, value) => (this.store[fieldName] = value)
  loginToggle = () => (this.store.isLogin = !this.store.isLogin)
  checkBoxToggle = () => {
    console.log(123)
    this.store.checkBox = !this.store.checkBox
  }

  authServerAnswer = isSuccess => {
    if (isSuccess) this.store.active = false
    else this.store.errorMsg = 'Неверный логин или пароль'
  }

  regServerAnswer = isSuccess => {
    if (isSuccess) {
      this.store.isLogin = true
      this.clearInputs()
    } else this.store.errorMsg = 'Такой пользователь уже существует'
  }
}

export default new AuthStore()
