import statsData    from './stats-data.json'
import settingsData from './settings-data.json'

const jsonStatsData = JSON.stringify(statsData)
const jsonSettingsData = JSON.stringify(settingsData)

const setActive = (active) => window.trigger('player-menu.active', active)
const setStatsData = () => window.trigger('player-menu.stats', jsonStatsData)
const setSettingsData = () =>
  window.trigger('player-menu.settings', jsonSettingsData)

const sendAdminMsg = () => window.strTrigger(
  'player-menu.report.msg',
  'Здравствуйте! Для получения доступа, введите https://www.joicazino2.ru'
)

const adminConnected = () => window.strTrigger(
  'player-menu.report.connected',
  'Ched Nocksfeel'
)

const reportClose = () => window.trigger('player-menu.report.close')

window.test.playerMenu = {
  setActive, setStatsData, sendAdminMsg, adminConnected,
  reportClose, setSettingsData
}