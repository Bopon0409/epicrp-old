import { makeAutoObservable } from 'mobx'

class HudStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })

    setInterval(() => {
      if (this.state.alerts.length < 3 && this.state.turnAlerts.length) {
        const alert = this.state.turnAlerts.pop()
        this.addAlert(alert)
      }
    }, 1000)
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
    indicators: {},
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

  setHudData = data => {
    for (const key in data) this.state[key] = data[key]
  }

  setHudOnline = online => (this.state.online = online)
  setHudActive = active => (this.state.active = active)
  setGeoHudData = geo => (this.state.geo = geo)
  setMicroHudData = microphone => (this.state.microphone = microphone)
  setMissionHudData = mission => (this.state.mission = mission)
  setSpeedometerHudData = speedometer => (this.state.speedometer = speedometer)

  addAlert = alert => {
    alert.id = this.state.alertsCount++
    if (this.state.alerts.length === 3) {
      this.state.turnAlerts.unshift(alert)
    } else {
      this.state.alerts.unshift(alert)
      setTimeout(this.deleteAlert, 15000)
    }
  }

  deleteAlert = () => this.state.alerts.pop()
}

export default new HudStore()
