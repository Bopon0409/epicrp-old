import data from './bank.data.json'
const jsonData = JSON.stringify(data)

const setActive = active => window.trigger('bank.toggle', active, jsonData)
const setData = () => window.trigger('bank.update', jsonData)
const setPinSuccess = () => window.trigger('bank.pin.success')
const setPinError = () => window.trigger('bank.pin.error')

window.test.bank = { setActive, setData, setPinError, setPinSuccess }
