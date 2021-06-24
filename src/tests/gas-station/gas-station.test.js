import data from './gas-station-data.json'

const setActive = (active) => window.trigger('gas-station.active', active)
const setData = () => window.trigger('gas-station.data', JSON.stringify(data))

window.test.gasStation = { setActive, setData }