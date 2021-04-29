import { observer } from 'mobx-react-lite'
import React from 'react'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar'
import store from '../speedometer-store'
import { Engine, Lock, Lights, Electricity } from './speedometer-svg'

export default observer(() => {
  const { speed, fuel, badges, maxSpeed } = store.state
  const { speedNulls } = store

  return (
    <div className='radial-wrapper'>
      <div className='radial-speedometer'>
        <CircularProgressbarWithChildren
          value={(speed / maxSpeed) * 100}
          circleRatio={0.75}
          strokeWidth={8}
          styles={buildStyles({
            rotation: 1 / 2,
            pathColor: 'rgb(187, 124, 28)',
            trailColor: 'rgba(0, 0, 0, 0.5)'
          })}
        >
          <div className='speed-view'>
            <div className='speed-flex'>
              <div className='speed-null'>{speedNulls}</div>
              <div className='speed'>{speed}</div>
            </div>
            <div className='hint'>км/ч</div>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className='radial-fuel'>
        <CircularProgressbar
          value={fuel}
          circleRatio={0.2}
          strokeWidth={3}
          counterClockwise
          styles={buildStyles({
            rotation: 0.225,
            pathColor: 'rgb(187, 124, 28)',
            trailColor: 'rgba(0, 0, 0, 0.5)'
          })}
        />
      </div>
      <div className='badges'>
        <Engine active={badges.engine} />
        <Lock active={badges.lock} />
        <Lights active={badges.lights} />
        <Electricity active={badges.electricity} />
      </div>
    </div>
  )
})
