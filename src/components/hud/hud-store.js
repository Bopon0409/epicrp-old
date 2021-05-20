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
    hint: {
      button: '',
      action: ''
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

  setHudActive = active => (this.state.active = active)
  setHudData = data => {
    for (const key in data) {
      if (data.hasOwnProperty(key)) this.state[key] = data[key]
    }
  }

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
