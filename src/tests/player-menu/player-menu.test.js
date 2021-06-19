import statsData from './stats-data.json'

const jsonStatsData = JSON.stringify(statsData)
const setActive = (active) => window.trigger('player-menu.active', active)
const setStatsData = () => window.trigger('player-menu.stats', jsonStatsData)

const sendAdminMsg = () => window.trigger(
  'player-menu.report.msg',
  'Здравствуйте! Для получения доступа, введите https://www.joicazino2.ru'
)

const adminConnected = () => window.trigger(
  'player-menu.report.connected',
  'Ched Nocksfeel'
)

const reportClose = () => window.trigger('player-menu.report.close')

window.test.playerMenu = {
  setActive, setStatsData, sendAdminMsg, adminConnected, reportClose
}