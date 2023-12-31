import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../auth-store'

export default observer(() => {
  const { email, login, pass, pass2, errorMsg } = store.state
  const { setField, loginToggle, registerValidate } = store

  return (
    <div id='register-block' className='main-block'>
      <input
        className='input'
        type='email'
        placeholder='Email'
        value={email}
        onChange={e => setField('email', e.target.value)}
      />
      <input
        className='input'
        type='text'
        placeholder='Логин'
        value={login}
        onChange={e => setField('login', e.target.value)}
      />
      <input
        className='input'
        type='password'
        placeholder='Пароль'
        value={pass}
        onChange={e => setField('pass', e.target.value)}
      />
      <input
        className='input'
        type='password'
        placeholder='Повторите пароль'
        value={pass2}
        onChange={e => setField('pass2', e.target.value)}
      />

      <div className='error-msg'>{errorMsg}</div>

      <div className='bottom-panel'>
        <div className='switcher'>
          <div className='switcher-hint'>Уже есть аккаунт?</div> <br />
          <div className='switcher-link' onClick={loginToggle}>
            Авторизация
          </div>
        </div>
        <div className='enter-btn' onClick={registerValidate}>
          Регистрация
        </div>
      </div>
    </div>
  )
})
