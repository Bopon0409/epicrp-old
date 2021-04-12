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
    em.addHandler('auth.authAnswer', store.authServerAnswer)
    em.addHandler('auth.registerAnswer', store.regServerAnswer)
    em.addHandler('auth.toggle', store.setAuthActive)
    document.addEventListener('keyup', store.enterHandler)

    return () => {
      em.removeHandler('auth.authAnswer', store.authServerAnswer)
      em.removeHandler('auth.registerAnswer', store.regServerAnswer)
      em.removeHandler('auth.toggle', store.setAuthActive)
      document.removeEventListener('keyup', store.enterHandler)
    }
  }, [])

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
        <div className='news-list'>
          {news.map(({ title, text, id }) => (
            <NewsItem key={id} title={title} text={text} />
          ))}
        </div>
      </div>
    </div>
  )
})
