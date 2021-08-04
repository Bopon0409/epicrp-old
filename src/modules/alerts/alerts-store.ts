import { makeAutoObservable }         from 'mobx'
import { IAlert, IAlertData, IState } from './model'
import { v4 as uuid4 }                from 'uuid'

class AlertsStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    afkStatus: false,
    alerts: [],
    alertsQueue: []
  }

  setAfkStatus = (status: boolean) => this.state.afkStatus = status

  push = (alertData: IAlertData) => {
    if (this.state.alerts.length < 2) {
      const alert = this.getAlert(alertData)
      this.state.alerts.unshift(alert)
    } else this.state.alertsQueue.push(alertData)
  }

  remove = (id: string) => {
    this.state.alerts = this.state.alerts.filter(alert => {
      if (alert.id === id && alert.timer) clearInterval(alert.timer)
      return alert.id !== id
    })

    // Добавление нового уведомления из очереди
    const alertData = this.state.alertsQueue.shift()
    if (alertData) setTimeout(() => this.push(alertData), 2000)
  }

  getAlert = (alertData: IAlertData): IAlert => {
    const alert = {
      ...alertData, id: uuid4(),
      timer: setInterval(() => {
        if (this.state.afkStatus) return
        else this.decAlertTime(alert.id)
      }, 1000)
    }
    return alert
  }

  decAlertTime = (id: string) => {
    const alert = this.state.alerts.find(alert => alert.id === id)
    if (alert) {
      if (alert.time === 0) this.remove(id)
      else alert.time -= 1
    }
  }

  dialogHandler = (result: boolean) => {
    const id = this.state.alerts.find(alert => alert.type === 'dialog')?.id
    if (id) {
      this.remove(id)
      window.frontTrigger('alert.dialog', result)
    }
  }

  keyPressHandler = ({ keyCode }: any) => {
    if (keyCode === 89) this.dialogHandler(true)
    if (keyCode === 78) this.dialogHandler(false)
  }
}

const store = new AlertsStore()
export { store }