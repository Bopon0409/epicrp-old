import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../store/hud/hud-store'

import {
  IndicatorSvg1,
  IndicatorSvg2,
  IndicatorSvg3
} from './modules/indicator-svg'
import Speedometer from './modules/speedometer'
import RightBlock from './modules/right-block'
import Alerts from './modules/alerts'
import LeftBlock from './modules/left-block'
import timeIcon from './images/time-icon.svg'

export default observer(() => {
  const { active, time, date } = store.state

  useEffect(() => {
    const { EventManager: em } = window

    const { setHudData, setHudOnline, setHudActive, setGeoHudData } = store
    const { setMicroHudData, setMissionHudData, setSpeedometerHudData } = store
    const { addAlert } = store

    em.addHandler('addAlert', addAlert)
    em.addHandler('setAllHudData', setHudData)
    em.addHandler('setOnlineHudData', setHudOnline)
    em.addHandler('setTimeHudData', setHudData)
    em.addHandler('setHudActive', setHudActive)
    em.addHandler('setHudData', setHudData)
    em.addHandler('setGeoHudData', setGeoHudData)
    em.addHandler('setMicroHudData', setMicroHudData)
    em.addHandler('setMissionHudData', setMissionHudData)
    em.addHandler('setSpeedometerHudData', setSpeedometerHudData)

    return () => {
      em.removeHandler('addAlert', addAlert)
      em.removeHandler('setAllHudData', setHudData)
      em.removeHandler('setOnlineHudData', setHudOnline)
      em.removeHandler('setTimeHudData', setHudData)
      em.removeHandler('setHudActive', setHudActive)
      em.removeHandler('setHudData', setHudData)
      em.removeHandler('setGeoHudData', setGeoHudData)
      em.removeHandler('setMicroHudData', setMicroHudData)
      em.removeHandler('setMissionHudData', setMissionHudData)
      em.removeHandler('setSpeedometerHudData', setSpeedometerHudData)
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
      <Speedometer />
      <RightBlock />
      <Alerts />
    </div>
  )
})
