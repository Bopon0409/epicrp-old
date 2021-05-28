import data from './atm-data.json'
const jsonData = JSON.stringify(data)

const setActive = active => window.trigger('atm.active', active)
const setData = () => window.trigger('atm.data', jsonData)

window.test.atm = { setActive, setData }
