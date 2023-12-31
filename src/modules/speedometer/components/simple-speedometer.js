import { observer }                                from 'mobx-react-lite'
import React                                       from 'react'
import { Fuel, Engine, Lock, Lights, Electricity } from './speedometer-svg'
import store                                       from '../speedometer-store'
import classNames                                  from 'classnames'

export default observer(() => {
  const { speed, fuel, badges } = store.state
  const { speedNulls } = store
  const fuelValue = store.state.fuel === 0 ? true : store.state.badges.fuel
  const progressClasses = classNames('progress-bar',
    fuel >= 96 && 'progress-bar-full'
  )

  return (
    <div className='simple-speedometer'>
      <div className='main'>
        <div className='fuel-view'>
          <Fuel active={fuelValue} />
          <div className='progress progress-moved'>
            <div className={progressClasses} style={{ width: `${fuel}%` }} />
            {fuel > 0 && fuel <= 95 ?
              <div className='progress-stick' style={{ left: `${fuel}%` }} />
              : null
            }
          </div>
        </div>
        <div className='speed-view'>
          <div className='speed-flex'>
            <div className='speed-null'>{speedNulls}</div>
            <div className='speed'>{speed}</div>
          </div>
          <div className='hint'>км/ч</div>
        </div>
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
