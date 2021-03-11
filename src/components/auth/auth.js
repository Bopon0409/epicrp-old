import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import store from '../../store/auth/auth-store'
import RegisterForm from './modules/register-form'
import AuthForm from './modules/auth-form'

import NewsItem from './modules/news-item'
import logoImg from './images/logo.svg'
import refreshImg from './images/refresh.svg'

export default observer(() => {
  const { active, isLogin, errorMsg, news } = store.state

  const registerValidate = (login, pass, pass2, email) => {
    const emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
    if (emailRegExp.test(email) === false)
      return store.setErrorMsg(store.ERROR_MESSAGES[5])
    if (/^[a-zA-Z1-9]+$/.test(login) === false)
      return store.setErrorMsg(store.ERROR_MESSAGES[0])
    if (login.length < 4 || login.length > 20)
      return store.setErrorMsg(store.ERROR_MESSAGES[1])
    if (parseInt(login.substr(0, 1)))
      return store.setErrorMsg(store.ERROR_MESSAGES[2])
    if (/^[a-zA-Z1-9]{6,}$/i.test(pass) === false)
      return store.setErrorMsg(store.ERROR_MESSAGES[3])
    if (pass !== pass2) return store.setErrorMsg(store.ERROR_MESSAGES[4])

    store.clearInputs()
    if (window.mp) window.mp.trigger('userRegister', login, email, pass)
  }

  const authValidate = (login, pass) => {
    console.log(login, pass)
    if (/^[a-zA-Z1-9]+$/.test(login) === false)
      return store.setErrorMsg(store.ERROR_MESSAGES[0])
    if (login.length < 4 || login.length > 20)
      return store.setErrorMsg(store.ERROR_MESSAGES[1])
    if (parseInt(login.substr(0, 1)))
      return store.setErrorMsg(store.ERROR_MESSAGES[2])
    if (/^[a-zA-Z1-9]{6,}$/i.test(pass) === false)
      return store.setErrorMsg(store.ERROR_MESSAGES[3])

    store.clearInputs()
    if (window.mp) window.mp.trigger('userAuth', login, pass)
  }

  useEffect(() => {
    const { EventManager } = window
    const { authServerAnswer, regServerAnswer, setAuthActive } = store

    const enterHandler = event => {
      const { login, pass, pass2, email, isLogin } = store.state
      if (event.keyCode === 13) {
        isLogin
          ? authValidate(login, pass)
          : registerValidate(login, pass, pass2, email)
      }
    }

    EventManager.addHandler('userAuthAnswer', authServerAnswer)
    EventManager.addHandler('userRegisterAnswer', regServerAnswer)
    EventManager.addHandler('setAuthActive', setAuthActive)
    document.addEventListener('keyup', enterHandler)

    return () => {
      EventManager.removeHandler('userAuthAnswer')
      EventManager.removeHandler('userRegisterAnswer')
      EventManager.removeHandler('setAuthActive')
      document.removeEventListener('keyup', enterHandler)
    }
  }, [])

  const newsList = news.map(({ title, text, id }) => (
    <NewsItem key={id} title={title} text={text} />
  ))

  return (
    <div
      className='auth'
      style={active ? { display: 'block' } : { display: 'none' }}
    >
      <div className='title-block'>
        <img src={logoImg} alt='' className='logo' />
        <div className='title'>{isLogin ? 'Авторизация' : 'Регистрация'}</div>
        <div className='error-msg'>{errorMsg}</div>
      </div>

      {isLogin ? (
        <AuthForm authValidate={authValidate} />
      ) : (
        <RegisterForm registerValidate={registerValidate} />
      )}

      <div className='news-block'>
        <div className='top-block'>
          <img src={refreshImg} alt='' className='refresh' />
          <div className='title'>Последние обновления</div>
        </div>
        <div className='news-list'>{newsList}</div>
      </div>
    </div>
  )
})
