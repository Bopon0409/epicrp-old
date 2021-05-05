import { makeAutoObservable } from 'mobx'
import { HandBrake } from './modules/speedometer-svg'

class SpeedometerStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    active: false,
    type: 0,
    speed: 0,
    maxSpeed: 300,
    fuel: 0,
    badges: {
      fuel: false,
      engine: false,
      lock: false,
      lights: false,
      electricity: false,
      handBrake: false
    }
  }

  setActive = active => (this.state.active = active)
  setType = type => (this.state.type = type)
  setSpeed = speed => (this.state.speed = speed)
  setMaxSpeed = max => (this.state.maxSpeed = max)
  setFuel = fuel => (this.state.fuel = fuel)
  setBadge = ({ badgeName, value }) => (this.state.badges[badgeName] = value)

  get speedNulls () {
    const { speed } = this.state
    switch (String(speed).length) {
      case 1:
        return '00'
      case 2:
        return '0'
      default:
        return ''
    }
  }
}

export default new SpeedometerStore()
