import React from 'react'
import { Fuel, Engine, Lock, Lights, Electricity } from './speedometer-svg'

export default function Speedometer ({ speedometer }) {
  const calcSpeedNulls = () => {
    switch (String(speedometer.speed).length) {
      case 1:
        return '00'
      case 2:
        return '0'
      default:
        return ''
    }
  }

  const speedometerStyle = { display: speedometer.active ? 'block' : 'none' }
  return (
    <div className='speedometer' style={speedometerStyle}>
      <div className='main'>
        <div className='fuel-view'>
          <Fuel active={true} />
          <div className='progress progress-moved'>
            <div
              className='progress-bar'
              style={{ width: `${speedometer.fuel}%` }}
            ></div>
          </div>
        </div>
        <div className='speed-view'>
          <div className='speed-flex'>
            <div className='speed-null'>{calcSpeedNulls()}</div>
            <div className='speed'>{speedometer.speed}</div>
          </div>
          <div className='hint'>км/ч</div>
        </div>
      </div>
      <div className='badges'>
        <Engine active={speedometer.badges.engine} />
        <Lock active={speedometer.badges.lock} />
        <Lights active={speedometer.badges.lights} />
        <Electricity active={speedometer.badges.electricity} />
      </div>
    </div>
  )
}
