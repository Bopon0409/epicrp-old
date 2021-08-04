import data           from './alerts-data.json'
import { IAlertData } from './doc'

// Установка afk статуса
const setAfkStatus = (status: boolean) =>
  window.trigger('alert.afk', status)

// Загрузка уведомления
const push = (alert: IAlertData) => window.trigger(
  'alert.push', JSON.stringify(alert)
)

// @ts-ignore
const test = () => data.forEach(alert => push(alert))

window.test.alerts = { push, test, setAfkStatus }