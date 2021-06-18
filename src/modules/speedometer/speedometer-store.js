import { makeAutoObservable } from 'mobx'

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
  setMaxSpeed = max => (this.state.maxSpeed = max)
  setBadge = ({ badgeName, value }) => (this.state.badges[badgeName] = value)
  setFuel = fuel => (this.state.fuel = fuel > 100 ? 100 : fuel)
  setSpeed = speed => (this.state.speed = speed > 999 ? 999 : speed)

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
