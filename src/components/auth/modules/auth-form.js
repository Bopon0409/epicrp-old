import React from 'react'
import authStore from '../../../store/auth/auth-store'

export default function AuthForm ({ authValidate }) {
  const { login, pass, checkBox } = authStore.store
  const { setField, loginToggle } = authStore
  console.log(login)
  return (
    <div className='main-block'>
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

      <div className='checkbox-block' onClick={authStore.checkBoxToggle}>
        <div className={checkBox ? 'checkbox active' : 'checkbox'}></div>
        <div className='label'>Запомнить меня</div>
      </div>

      <div className='bottom-panel'>
        <div className='switcher'>
          <div className='switcher-hint'>Ещё нет аккаунта?</div> <br />
          <div className='switcher-link' onClick={loginToggle}>
            Регистрация
          </div>
        </div>
        <div className='enter-btn' onClick={authValidate}>
          Войти
        </div>
      </div>
    </div>
  )
}
