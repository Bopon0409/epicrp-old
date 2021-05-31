import data from './bank.data.json'

const jsonData = JSON.stringify(data)
const errorData = JSON.stringify({ error: 'Некорректный пин' })

const setActive = active => window.trigger('bank.toggle', active, jsonData)
const setData = () => window.trigger('bank.update', jsonData)
const setPinSuccess = () => window.trigger('bank.pin.success')
const setPinError = () => window.trigger('bank.pin.error', errorData)

window.test.bank = { setActive, setData, setPinError, setPinSuccess }
