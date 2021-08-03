import data           from './alerts-data.json'
import { IAlertData } from './doc'

// Загрузка уведомления
const push = (alert: IAlertData) => window.trigger(
  'alert.push', JSON.stringify(alert)
)

const test = () => {
  let count = 0
  const interval = setInterval(() => {
    // @ts-ignore
    count < 7 ? push(data[count++]) : clearInterval(interval)
  }, 1000)
}

window.test.alerts = { push, test }