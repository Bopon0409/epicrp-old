import { makeAutoObservable } from 'mobx'

class HudStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    active: false,
    online: 0,
    id: 0,
    time: '',
    date: '',
    money: 0,
    geo: { quarter: '', street: '' },
    microphone: {
      active: false,
      btn: 'N'
    },
    mission: {
      active: false,
      title: '',
      text: ''
    },
    errors: {},
    speedometer: {
      active: false,
      speed: 0,
      fuel: 0,
      badges: {
        fuel: false,
        engine: false,
        lock: false,
        lights: false,
        electricity: false
      }
    },
    alerts: [],
    alertsCount: 0,
    turnAlerts: []
  }

  setAllHudData = data => {
    for (key in data) {
      this.state[key] = data[key]
    }
  }

  setTimeHudData = ({ time, date }) => {
    this.state.time = time
    this.state.date = date
  }

  setHudData = ({ id, time, date, money, errors }) => {
    this.state.id = id
    this.state.date = date
    this.state.time = time
    this.state.money = money
    this.state.errors = errors
  }

  setHudOnline = online => (this.state.online = online)
  setHudActive = active => (this.state.active = active)
  setGeoHudData = geo => (this.state.geo = geo)
  setMicroHudData = microphone => (this.state.microphone = microphone)
  setMissionHudData = mission => (this.state.mission = mission)
  setSpeedometerHudData = speedometer => (this.state.speedometer = speedometer)

  addAlert = alert => this.state.alerts.push(alert)
}

export default new HudStore()
