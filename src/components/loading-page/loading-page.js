import React, { useEffect, useState } from 'react'
import Loader                         from 'react-loader-spinner'
import logo                           from './img/logo.svg'
import hintIcon                       from './img/hint_icon.svg'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './loading-page.scss'

export const LoadingPage = () => {
  const [active, setActive] = useState(false)
  const [hint, setHint] = useState('')

  const setLoader = ({ active, hint }) => {
    setActive(active)
    if (hint) setHint(hint)
    if (!active) setHint('')
  }

  useEffect(() => {
    const { EventManager: em } = window
    em.addHandler('loading.set', setLoader)
    return () => em.removeHandler('loading.set', setLoader)
  }, [])

  return active && (
    <div className='loading-page'>
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
}