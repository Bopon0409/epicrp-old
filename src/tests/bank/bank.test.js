import data from './bank.data.json'
const jsonData = JSON.stringify(data)

const setActive = active => window.trigger('bank.toggle', active, jsonData)
const setData = () => window.trigger('bank.update', jsonData)

window.test.bank = { setActive, setData }
