import statsData    from './stats-data.json'
import settingsData from './settings-data.json'
import questsData   from './quests-data.json'
import donatData    from './donat-data.json'
import caseData     from './case-data.json'

const jsonStatsData = JSON.stringify(statsData) // данные статистики
const jsonSettingsData = JSON.stringify(settingsData) // данные настроек
const jsonQuestsData = JSON.stringify(questsData) // данные квестов
const jsonDonatData = JSON.stringify(donatData) // данные доната
const jsonCaseData = JSON.stringify(caseData) // данные кейсов

// отобразить / скрыть player-menu
const setActive = (active) => window.trigger('player-menu.active', active)

const sendAdminMsg = () => window.strTrigger(
  'player-menu.report.msg',
  'Здравствуйте! Для получения доступа, введите https://www.joicazino2.ru'
)

const adminConnected = () => window.strTrigger(
  'player-menu.report.connected',
  'Ched Nocksfeel'
)

const reportClose = () => window.trigger('player-menu.report.close')

// =================================== STATS ===================================
// загрузить данные для страницы 'статистика'
const setStatsData = () => window.trigger('player-menu.stats', jsonStatsData)

// =================================== SETTINGS ================================
// загрузить данные для страницы 'Настройки'
const setSettingsData = () =>
  window.trigger('player-menu.settings', jsonSettingsData)

// =================================== DONAT ===================================
// загрузить данные для страницы 'Донат'
const setDonatData = () => window.trigger('player-menu.donat', jsonDonatData)

// загрузить массив с предметами в кейс
const setCaseData = () =>
  window.trigger('player-menu.donat.case-content', jsonCaseData)

// задать выигрышный номер (индекс)
const setWinnerIndex = () =>
  window.trigger('player-menu.donat.winner-index', 15)

// проверка на наличие донат валюты (хватает ли её)
const checkDonatCoins = () =>
  window.trigger('player-menu.donat.check-money', true)

// =================================== QUESTS ==================================
// загрузить данные для страницы 'Квесты'
const setQuestsData = () => window.trigger('player-menu.quests', jsonQuestsData)

window.test.playerMenu = {
  setActive, setStatsData, sendAdminMsg, adminConnected,
  reportClose, setSettingsData, setQuestsData, setDonatData, setCaseData,
  setWinnerIndex, checkDonatCoins
}