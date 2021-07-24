import alertsData from './alertsData.json'
import hudData    from './hud-data.json'

// Включить/Выключить hud
const setActive = (active = true) => window.trigger('hud.toggle', active)

// Скрыть hud (кроме логотипа)
const setHidden = hide => window.trigger('hud.hide', hide)

// Загрузка данных худа
const setAllData = () => window.trigger('hud.data', JSON.stringify(hudData))
const testAlerts = () => {
  let counter = 0
  const interval = setInterval(() => {

    // Отправка уведомления
    window.trigger('hud.notify', JSON.stringify(alertsData[counter++]))
    if (counter === 5) clearInterval(interval)
  }, 500)
}

window.test.hud = { testAlerts, setAllData, setActive, setHidden }
