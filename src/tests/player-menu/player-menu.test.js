import statsData from './stats-data.json'

const jsonStatsData = JSON.stringify(statsData)
const setActive = (active) => window.trigger('player-menu.active', active)
const setStatsData = () => window.trigger('player-menu.stats', jsonStatsData)

window.test.playerMenu = { setActive, setStatsData }