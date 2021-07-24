import statsData    from './stats-data.json'
import settingsData from './settings-data.json'
import questsData from './quests-data.json';
import donatData from './donat-data.json';

const jsonStatsData = JSON.stringify(statsData)
const jsonSettingsData = JSON.stringify(settingsData)
const jsonQuestsData = JSON.stringify(questsData)
const jsonDonatData = JSON.stringify(donatData)


const setActive = (active) => window.trigger('player-menu.active', active)
const setStatsData = () => window.trigger('player-menu.stats', jsonStatsData)
const setSettingsData = () => {
  window.trigger('player-menu.settings', jsonSettingsData)
}
const setQuestsData = () => {
  window.trigger('player-menu.quests', jsonQuestsData);
}

const setDonatData = () => {
  window.trigger('player-menu.donat', jsonDonatData);
}

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
  reportClose, setSettingsData, setQuestsData, setDonatData
}