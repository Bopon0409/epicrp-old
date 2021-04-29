import data from './atm-data.json'
const jsonData = JSON.stringify(data)

const setActive = active => window.trigger('atm.toggle', active)
const setData = () => window.trigger('atm.update', jsonData)

window.test.atm = { setActive, setData }
