import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../auth-store'

export default observer(() => {
  const { login, pass, checkBox, errorMsg } = store.state
  const { setField, loginToggle, checkBoxToggle, authValidate } = store

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

      <div className='error-msg'>{errorMsg}</div>

      <div className='checkbox-block' onClick={checkBoxToggle}>
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
})
