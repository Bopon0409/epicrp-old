import React, { Component } from 'react'

import NewsItem from './news-item'
import logoImg from './images/logo.svg'
import refreshImg from './images/refresh.svg'
import './auth.scss'

export default class Auth extends Component {
  state = {
    checkBox: false,
    isLogin: true,
    errorMsg: '',
    login: '',
    email: '',
    pass: '',
    pass2: ''
  }

  onFieldChange = (event, fieldName) => {
    this.setErrorMsg('')
    this.setState({ [fieldName]: event.target.value })
  }

  clearInputs = () => {
    console.log('check')
    this.setState({ login: '', email: '', pass: '', pass2: '' })
  }

  setErrorMsg = errorMsg => this.setState({ errorMsg })

  authValidate = () => {
    const { login, pass } = this.state
    if (/^[a-zA-Z1-9]+$/.test(login) === false)
      return this.setErrorMsg(
        'В логине должны быть только латинские буквы и цифры'
      )
    if (login.length < 4 || login.length > 20)
      return this.setErrorMsg('В логине должен быть от 4 до 20 символов')
    if (parseInt(login.substr(0, 1)))
      return this.setErrorMsg('Логине должен начинаться с буквы')

    if (/^[a-zA-Z1-9]{6,}$/i.test(pass) === false)
      return this.setErrorMsg(
        'Пароль должен быть не менее 6 символов, и состоять только из латинских символов и цифр'
      )

    const data = JSON.stringify({ login, pass })
    this.clearInputs()
    if (window.mp) window.mp.trigger('userAuth', data)
  }

  registerValidate = () => {
    const { login, pass, email, pass2 } = this.state
    if (/^[a-zA-Z1-9]+$/.test(login) === false)
      return this.setErrorMsg(
        'В логине должны быть только латинские буквы и цифры'
      )
    if (login.length < 4 || login.length > 20)
      return this.setErrorMsg('В логине должен быть от 4 до 20 символов')
    if (parseInt(login.substr(0, 1)))
      return this.setErrorMsg('Логине должен начинаться с буквы')

    if (/^[a-zA-Z1-9]{6,}$/i.test(pass) === false)
      return this.setErrorMsg(
        'Пароль должен быть не менее 6 символов, и состоять только из латинских символов и цифр'
      )

    if (pass !== pass2) return this.setErrorMsg('Пароли не совпадают')

    if (
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
        email
      ) === false
    )
      return this.setErrorMsg('Некорректный email')

    const data = JSON.stringify({ email, login, pass })
    this.clearInputs()
    if (window.mp) window.mp.trigger('userRegister', data)
  }

  loginToggle = () => this.setState(({ isLogin }) => ({ isLogin: !isLogin }))

  checkBoxToggle = () =>
    this.setState(({ checkBox }) => ({ checkBox: !checkBox }))

  getNewsList = () => {
    const list = []
    for (let i = 0; i < 3; i++) {
      list.push(
        <div key={i}>
          <NewsItem key={i} />
        </div>
      )
    }
    return list
  }

  render () {
    const {
      isLogin,
      checkBox,
      errorMsg,
      login,
      pass,
      pass2,
      email
    } = this.state
    return (
      <div className='auth'>
        <div className='title-block'>
          <img src={logoImg} alt='' className='logo' />
          <div className='title'>{isLogin ? 'Авторизация' : 'Регистрация'}</div>
          <div className='error-msg'>{errorMsg}</div>
        </div>

        {isLogin ? (
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
        ) : (
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
        )}

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
