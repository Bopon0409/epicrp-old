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

  useEffect(() => {
    const { EventManager: em } = window
    const {
      authServerAnswer,
      regServerAnswer,
      setAuthActive,
      enterHandler
    } = store

    em.addHandler('auth.authAnswer', authServerAnswer)
    em.addHandler('auth.registerAnswer', regServerAnswer)
    em.addHandler('auth.toggle', setAuthActive)
    document.addEventListener('keyup', enterHandler)

    return () => {
      em.removeHandler('auth.authAnswer', authServerAnswer)
      em.removeHandler('auth.registerAnswer', regServerAnswer)
      em.removeHandler('auth.toggle', setAuthActive)
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

      {isLogin ? <AuthForm /> : <RegisterForm />}

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
