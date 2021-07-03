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
    hidden: true,
    online: 0,
    id: 0,
    time: '',
    date: '',
    money: 0,
    geo: { quarter: '', street: '' },
    microphone: { active: false, btn: 'N' },
    hint: { button: '', action: '' },
    mission: { active: false, title: '', text: '' },
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
    turnAlerts: [],
    dialogueTimer: null,
    map: { width: 0, height: 0, bottom: 0, left: 0 },
    isMapLarge: false,
    moneyAdd: { status: 'top', sum: 0 },
    moneyAddTimer1: null,
    moneyAddTimer2: null
  }

  setHudActive = active => (this.state.active = active)
  setHidden = hidden => this.state.hidden = hidden
  setHudData = data => {
    for (const key in data) {
      if (key === 'money') this.addMoney(data.money - this.state.money)
      if (data.hasOwnProperty(key)) this.state[key] = data[key]
    }
  }

  setMoneyAdd = (status, sum) => this.state.moneyAdd = { status, sum }

  addMoney = sum => {
    clearInterval(this.state.moneyAddTimer1)
    clearInterval(this.state.moneyAddTimer2)
    if (sum > 0) {
      this.setMoneyAdd('center', sum)
      this.state.moneyAddTimer1 = setTimeout(
        () => this.setMoneyAdd('bottom', sum), 6000
      )
      this.state.moneyAddTimer2 = setTimeout(
        () => this.setMoneyAdd('disable', 0), 7000
      )
    } else if (sum < 0) {
      this.setMoneyAdd('center', sum)
      this.state.moneyAddTimer1 = setTimeout(
        () => this.setMoneyAdd('top', sum), 6000
      )
      this.state.moneyAddTimer2 = setTimeout(
        () => this.setMoneyAdd('disable', 0), 7000
      )
    }
  }

  get marginLeft () {
    const { map, isMapLarge } = this.state
    const margin = map.left + map.width + 20
    return isMapLarge ? margin * 1.5 : margin
  }

  addAlert = alert => {
    alert.id = this.state.alertsCount++
    if (this.state.alerts.length === 3) {
      this.state.turnAlerts.unshift(alert)
    } else {
      this.state.alerts.unshift(alert)
      const timer = setTimeout(() => this.deleteAlert(alert.id), 15000)
      if (alert.type === 'dialogue') this.state.dialogueTimer = timer
    }
  }

  deleteAlert = id => {
    this.state.alerts = this.state.alerts.filter(alert => alert.id !== id)
  }

  dialogueAccept = id => {
    window.frontTrigger('hud.dialogue.accept')
    this.deleteAlert(id)
    clearTimeout(this.state.dialogueTimer)

  }

  dialogueDecline = id => {
    window.frontTrigger('hud.dialogue.decline')
    this.deleteAlert(id)
    clearTimeout(this.state.dialogueTimer)
  }
}

export default new HudStore()
