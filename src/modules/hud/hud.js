import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import store                from './hud-store'
import RightBlock           from './components/right-block'
import Alerts               from './components/alerts'
import LeftBlock            from './components/left-block'
import timeIcon             from './images/time-icon.svg'
import {
  IndicatorSvg1,
  IndicatorSvg2,
  IndicatorSvg3
}                           from './components/indicator-svg'

export default observer(() => {
  const { active, time, date, hint, hidden } = store.state

  useEffect(() => {
    const { EventManager: em } = window
    em.addHandler('hud.toggle', store.setHudActive)
    em.addHandler('hud.hidden', store.setHidden)
    em.addHandler('hud.data', store.setHudData)
    em.addHandler('hud.notify', store.addAlert)
    return () => {
      em.removeHandler('hud.toggle', store.setHudActive)
      em.removeHandler('hud.hidden', store.setHidden)
      em.removeHandler('hud.data', store.setHudData)
      em.removeHandler('hud.notify', store.addAlert)
    }
  }, [])

  return active ? (
    <>
      <div className='hud'>
        {!hidden ? (
          <div className='right-panel'>
            <IndicatorSvg1 />
            <IndicatorSvg2 />
            <IndicatorSvg3 />
          </div>
        ) : null}

        {!hidden ? (
          <div className='time-block'>
            <img src={timeIcon} alt='' className='icon' />
            <div className='time'>{time}</div>
            <div className='date'>{date}</div>
          </div>
        ) : null}

        {hint.action && !hidden ? (
          <div className='hint'>
            <div className='text'>Нажмите клавишу</div>
            <div className='button'>{hint.button}</div>
            <div className='text'>{hint.action}</div>
          </div>
        ) : null}

        {!hidden ? <LeftBlock /> : null}
        <RightBlock />
      </div>
      <Alerts />
    </>
  ) : null
})
