import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import store             from './speedometer-store'
import SimpleSpeedometer from './components/simple-speedometer'
import RadialSpeedometer from './components/radial-speedometer'

export default observer(() => {
  const { active, type } = store.state
  useEffect(() => {
    const { EventManager: em } = window
    const { setActive, setType, setBadge } = store
    const { setSpeed, setFuel, setMaxSpeed } = store

    em.addHandler('speedometer.active', setActive)
    em.addHandler('speedometer.type', setType)
    em.addHandler('speedometer.speed', setSpeed)
    em.addHandler('speedometer.maxSpeed', setMaxSpeed)
    em.addHandler('speedometer.fuel', setFuel)
    em.addHandler('speedometer.badge', setBadge)
    return () => {
      em.removeHandler('speedometer.active', setActive)
      em.removeHandler('speedometer.type', setType)
      em.removeHandler('speedometer.speed', setSpeed)
      em.removeHandler('speedometer.maxSpeed', setMaxSpeed)
      em.removeHandler('speedometer.fuel', setFuel)
      em.removeHandler('speedometer.badge', setBadge)
    }
  }, [])

  return active ? (
    <div className='speedometer'>
      {type === 0 && <RadialSpeedometer />}
      {type === 1 && <SimpleSpeedometer />}
    </div>
  ) : null
})
