import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import store                from './hud-store'
import RightBlock           from './modules/right-block'
import Alerts               from './modules/alerts'
import LeftBlock            from './modules/left-block'
import timeIcon             from './images/time-icon.svg'
import {
  IndicatorSvg1,
  IndicatorSvg2,
  IndicatorSvg3
}                           from './modules/indicator-svg'

export default observer(() => {
  const { active, time, date } = store.state

  useEffect(() => {
    const { EventManager: em } = window
    em.addHandler('hud.toggle', store.setHudActive)
    em.addHandler('hud.data', store.setHudData)
    em.addHandler('hud.notify', store.addAlert)
    return () => {
      em.removeHandler('hud.toggle', store.setHudActive)
      em.removeHandler('hud.data', store.setHudData)
      em.removeHandler('hud.notify', store.addAlert)
    }
  }, [])

  return active ? (
    <div className='hud'>
      <div className='right-panel'>
        <IndicatorSvg1 />
        <IndicatorSvg2 />
        <IndicatorSvg3 />
      </div>

      <div className='time-block'>
        <img src={timeIcon} alt='' className='icon' />
        <div className='time'>{time}</div>
        <div className='date'>{date}</div>
      </div>

      <LeftBlock />
      <RightBlock />
      <Alerts />
    </div>
  ) : null
})
