import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../store/auth/auth-store'

export default observer(({ authValidate }) => {
  const { login, pass, checkBox } = store.state
  const { setField, loginToggle, checkBoxToggle } = store

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
        <div className='enter-btn' onClick={() => authValidate(login, pass)}>
          Войти
        </div>
      </div>
    </div>
  )
})
