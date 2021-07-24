import data from './bank.data.json'
const jsonData = JSON.stringify(data)

const setActive = active => window.trigger('bank.toggle', active, jsonData)

// Загрузка данных банка
const setData = () => window.trigger('bank.update', jsonData)

// Ответ сервера на ввод пин-кода
const setPinSuccess = () => window.trigger('bank.pin.success')
const setPinError = () => window.trigger('bank.pin.error')

window.test.bank = { setActive, setData, setPinError, setPinSuccess }
