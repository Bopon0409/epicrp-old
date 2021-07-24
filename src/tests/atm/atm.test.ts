import data from './atm-data.json'

const jsonData = JSON.stringify(data)
const errorData = JSON.stringify({ error: 'Неверный пин-код' })

const setActive = (active: boolean) => window.trigger('atm.active', active)

// Загрузка данных банкомата
const setData = () => window.trigger('atm.data', jsonData)

// Ответ сервера на ввод пин кода
const setEnterSuccess = () => window.trigger('atm.enter.success')
const setEnterError = () => window.trigger('atm.enter.error', errorData)

window.test.atm = { setActive, setData, setEnterSuccess, setEnterError }
