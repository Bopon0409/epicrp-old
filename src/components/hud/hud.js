import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../store/hud/hud-store'
import RightBlock from './modules/right-block'
import Alerts from './modules/alerts'
import LeftBlock from './modules/left-block'
import timeIcon from './images/time-icon.svg'
import {
  IndicatorSvg1,
  IndicatorSvg2,
  IndicatorSvg3
} from './modules/indicator-svg'

export default observer(() => {
  const { active, time, date } = store.state

  useEffect(() => {
    const { EventManager: em } = window

    const { setHudData, setHudOnline, setHudActive, setGeoHudData } = store
    const { setMicroHudData, setMissionHudData } = store
    const { addAlert } = store

    em.addHandler('hud.notify', addAlert)
    em.addHandler('hud.setData', setHudData)
    em.addHandler('hud.online', setHudOnline)
    em.addHandler('hud.time', setHudData)
    em.addHandler('hud.toggle', setHudActive)
    em.addHandler('hud.setAllData', setHudData)
    em.addHandler('hud.geo', setGeoHudData)
    em.addHandler('hud.micro', setMicroHudData)
    em.addHandler('hud.mission', setMissionHudData)

    return () => {
      em.removeHandler('hud.notify', addAlert)
      em.removeHandler('hud.setData', setHudData)
      em.removeHandler('hud.online', setHudOnline)
      em.removeHandler('hud.time', setHudData)
      em.removeHandler('hud.toggle', setHudActive)
      em.removeHandler('hud.setAllData', setHudData)
      em.removeHandler('hud.geo', setGeoHudData)
      em.removeHandler('hud.micro', setMicroHudData)
      em.removeHandler('hud.mission', setMissionHudData)
    }
  }, [])

  const hudStyle = active ? { display: 'block' } : { display: 'none' }
  return (
    <div className='hud' style={hudStyle}>
      <div className='bg'></div>

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
  )
})
