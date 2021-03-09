import React from 'react'
import { observer } from 'mobx-react-lite'
import authStore from '../../../store/auth/auth-store'

export default observer(({ registerValidate }) => {
  const { email, login, pass, pass2 } = authStore.store
  const { setField, loginToggle } = authStore
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
