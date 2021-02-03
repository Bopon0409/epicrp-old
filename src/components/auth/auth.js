import React, { Component } from 'react'

import logo from './images/logo.svg'
import './auth.scss'

export default class Auth extends Component {
  state = {
    checkBox: false,
    isLogin: true
  }

  loginToggle = () => this.setState(({ isLogin }) => ({ isLogin: !isLogin }))

  checkBoxToggle = () =>
    this.setState(({ checkBox }) => ({ checkBox: !checkBox }))

  render () {
    const { isLogin, checkBox } = this.state
    return (
      <div className='auth'>
        <div className='title-block'>
          <img src={logo} alt='' className='logo' />
          <div className='title'>{isLogin ? 'Авторизация' : 'Регистрация'}</div>
        </div>

        {isLogin ? (
          <div className='main-block'>
            <input className='input' type='text' placeholder='Логин' />
            <input className='input' type='password' placeholder='Пароль' />

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
              <div className='enter-btn'>Войти</div>
            </div>
          </div>
        ) : (
          <div id='register-block' className='main-block'>
            <input className='input' type='email' placeholder='Email' />
            <input className='input' type='text' placeholder='Логин' />
            <input className='input' type='password' placeholder='Пароль' />
            <input
              className='input'
              type='password'
              placeholder='Повторите пароль'
            />

            <div className='bottom-panel'>
              <div className='switcher'>
                <div className='switcher-hint'>Уже есть аккаунт?</div> <br />
                <div className='switcher-link' onClick={this.loginToggle}>
                  Авторизация
                </div>
              </div>
              <div className='enter-btn'>Регистрация</div>
            </div>
          </div>
        )}

        {/* <div className='news-block'>
          <div className='top-block'>
            <img src='' alt='' className='refresh' />
            <div className='title'>Последние обновления</div>
          </div>
          <div className='main-block'></div>
        </div> */}
      </div>
    )
  }
}
