import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import './alerts.scss'
import { store }            from './alerts-store'
import { Icon }             from './icon'
import timeIcon             from './img/time.svg'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

export const Alerts = observer(() => {

  useEffect(() => {
    const { EventManager: em } = window
    em.addHandler('alert.push', store.push)
    document.addEventListener('keydown', store.keyPressHandler)
    return () => {
      em.removeHandler('alert.push', store.push)
      document.removeEventListener('keydown', store.keyPressHandler)
    }
  }, [])

  const { state: { alerts }, dialogHandler } = store
  return (
    <TransitionGroup className='alerts'>{
      alerts.map((alert) => {
        const { title, text, type, time, id } = alert
        const handler1 = () => dialogHandler(true)
        const handler2 = () => dialogHandler(false)

        return (
          <CSSTransition key={id} timeout={500} classNames='alert'>
            <div className='alert__item'>
              <div className='alert__container'>
                <div className='alert__header'>
                  <div className='alert__title'>{title}</div>
                  <div className='alert__timer'>
                    <img src={timeIcon} alt='' />
                    <div className='text'>{time} сек</div>
                  </div>
                </div>
                <div className='alert__body'>
                  <div className='alert__icon'><Icon type={type} /></div>
                  <div className='alert__text'>{text}</div>
                </div>
              </div>

              {type === 'dialog' && (
                <div className='alert__dialog'>
                  <div className='alert__dialog-btn' onClick={handler1}>
                    <div className='text'>Принять (Y)</div>
                  </div>
                  <div className='alert__dialog-btn' onClick={handler2}>
                    <div className='text'>Отказаться (N)</div>
                  </div>
                </div>
              )}
            </div>
          </CSSTransition>
        )
      })
    }</TransitionGroup>
  )
})