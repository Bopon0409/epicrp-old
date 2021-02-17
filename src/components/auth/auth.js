import React, { Component } from 'react'

import NewsItem from './news-item'
import logoImg from './images/logo.svg'
import refreshImg from './images/refresh.svg'
import './auth.scss'

export default class Auth extends Component {
  errorMessages = [
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

  componentDidMount = () => {
    window.EventManager.addHandler(
      'userAuthAnswer',
      this.authServerAnswerHandler.bind(this)
    )

    window.EventManager.addHandler(
      'userRegisterAnswer',
      this.registerServerAnswerHandler.bind(this)
    )

    window.EventManager.addHandler(
      'setAuthActive',
      this.setAuthActive.bind(this)
    )
  }

  setAuthActive = active => this.setState({ active })

  authServerAnswerHandler = isSuccess => {
    if (isSuccess) this.setAuthActive(false)
    else this.setState({ errorMsg: 'Неверный логин или пароль' })
  }

  registerServerAnswerHandler = isSuccess => {
    if (isSuccess) this.setState({ isLogin: true })
    else this.setState({ errorMsg: 'Такой пользователь уже существует' })
  }

  onFieldChange = (event, fieldName) => {
    this.setErrorMsg('')
    this.setState({ [fieldName]: event.target.value })
  }

  clearInputs = () =>
    this.setState({ login: '', email: '', pass: '', pass2: '', errorMsg: '' })

  setErrorMsg = errorMsg => this.setState({ errorMsg })

  loginToggle = () => this.setState(({ isLogin }) => ({ isLogin: !isLogin }))

  checkBoxToggle = () =>
    this.setState(({ checkBox }) => ({ checkBox: !checkBox }))

  authValidate = () => {
    const { login, pass } = this.state

    if (/^[a-zA-Z1-9]+$/.test(login) === false)
      return this.setErrorMsg(this.errorMessages[0])
    if (login.length < 4 || login.length > 20)
      return this.setErrorMsg(this.errorMessages[1])
    if (parseInt(login.substr(0, 1)))
      return this.setErrorMsg(this.errorMessages[2])
    if (/^[a-zA-Z1-9]{6,}$/i.test(pass) === false)
      return this.setErrorMsg(this.errorMessages[3])

    this.clearInputs()
    if (window.mp) window.mp.trigger('userAuth', login, pass)
  }

  registerValidate = () => {
    const { login, pass, email, pass2 } = this.state
    if (/^[a-zA-Z1-9]+$/.test(login) === false)
      return this.setErrorMsg(this.errorMessages[0])
    if (login.length < 4 || login.length > 20)
      return this.setErrorMsg(this.errorMessages[1])
    if (parseInt(login.substr(0, 1)))
      return this.setErrorMsg(this.errorMessages[2])
    if (/^[a-zA-Z1-9]{6,}$/i.test(pass) === false)
      return this.setErrorMsg(this.errorMessages[3])
    if (pass !== pass2) return this.setErrorMsg(this.errorMessages[4])

    const emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
    if (emailRegExp.test(email) === false)
      return this.setErrorMsg(this.errorMessages[5])

    this.clearInputs()
    if (window.mp) window.mp.trigger('userRegister', login, email, pass)
  }

  getNewsList = () => {
    const list = []
    for (let i = 0; i < 3; i++) {
      const { title, text } = this.state.news[i]
      list.push(<NewsItem key={i} title={title} text={text} />)
    }
    return list
  }

  render () {
    const {
      active,
      isLogin,
      checkBox,
      errorMsg,
      login,
      pass,
      pass2,
      email
    } = this.state

    const authForm = (
      <div className='main-block'>
        <input
          className='input'
          type='text'
          placeholder='Логин'
          value={login}
          onChange={e => this.onFieldChange(e, 'login')}
        />
        <input
          className='input'
          type='password'
          placeholder='Пароль'
          value={pass}
          onChange={e => this.onFieldChange(e, 'pass')}
        />

        <div className='checkbox-block' onClick={this.checkBoxToggle}>
          <div className={checkBox ? 'checkbox active' : 'checkbox'}></div>
          <div className='label'>Запомнить меня</div>
        </div>

        <div className='bottom-panel'>
          <div className='switcher'>
            <div className='switcher-hint'>Ещё нет аккаунта?</div> <br />
            <div className='switcher-link' onClick={this.loginToggle}>
              Регистрация
            </div>
          </div>
          <div className='enter-btn' onClick={this.authValidate}>
            Войти
          </div>
        </div>
      </div>
    )

    const registerForm = (
      <div id='register-block' className='main-block'>
        <input
          className='input'
          type='email'
          placeholder='Email'
          value={email}
          onChange={e => this.onFieldChange(e, 'email')}
        />
        <input
          className='input'
          type='text'
          placeholder='Логин'
          value={login}
          onChange={e => this.onFieldChange(e, 'login')}
        />
        <input
          className='input'
          type='password'
          placeholder='Пароль'
          value={pass}
          onChange={e => this.onFieldChange(e, 'pass')}
        />
        <input
          className='input'
          type='password'
          placeholder='Повторите пароль'
          value={pass2}
          onChange={e => this.onFieldChange(e, 'pass2')}
        />

        <div className='bottom-panel'>
          <div className='switcher'>
            <div className='switcher-hint'>Уже есть аккаунт?</div> <br />
            <div className='switcher-link' onClick={this.loginToggle}>
              Авторизация
            </div>
          </div>
          <div className='enter-btn' onClick={this.registerValidate}>
            Регистрация
          </div>
        </div>
      </div>
    )

    const authStyle = active ? { display: 'block' } : { display: 'none' }

    return (
      <div className='auth' style={authStyle}>
        <div className='title-block'>
          <img src={logoImg} alt='' className='logo' />
          <div className='title'>{isLogin ? 'Авторизация' : 'Регистрация'}</div>
          <div className='error-msg'>{errorMsg}</div>
        </div>

        {isLogin ? authForm : registerForm}

        <div className='news-block'>
          <div className='top-block'>
            <img src={refreshImg} alt='' className='refresh' />
            <div className='title'>Последние обновления</div>
          </div>
          <div className='news-list'>{this.getNewsList()}</div>
        </div>
      </div>
    )
  }
}
