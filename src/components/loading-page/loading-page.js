import React, { useEffect } from 'react'
import Loader               from 'react-loader-spinner'
import logo                 from './img/logo.svg'
import hintIcon             from './img/hint_icon.svg'
import { store }            from './loading-store'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './loading-page.scss'
import { observer }         from 'mobx-react-lite'
import classNames           from 'classnames'

export const LoadingPage = observer(() => {
  const { active, hint, opacity } = store.state
  const classes = classNames('loading-page',
    opacity && 'loading-page--active'
  )

  useEffect(() => {
    const { EventManager: em } = window
    em.addHandler('loading.set', store.setLoader)
    return () => em.removeHandler('loading.set', store.setLoader)
  }, [])

  return active && (
    <div className={classes}>
      <img src={logo} alt='' className='logo' />
      <div className='loader-wrapper'>
        <Loader type='Puff' color='#E5961E' height={100} width={100} />
      </div>
      {hint ? <div className='hint-container'>
        <img src={hintIcon} alt='' className='hint-icon' />
        <div className='hint-text'>{hint}</div>
      </div> : null}
    </div>
  )
})