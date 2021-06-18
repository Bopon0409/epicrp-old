import data from './stats-data.json'

const jsonData = JSON.stringify(data)
const setActive = (active) => window.trigger('player-menu.active', active)
const setData = () => window.trigger('player-menu.data', jsonData)

export { setActive, setData }