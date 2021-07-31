import adminLogData from './admin-log-data.json'
import carLogData   from './car-log-data.json'
import killLogData  from './kil-log-data.json'
import carsData     from './cars-data.json'
import msgData      from './chat-message.json'
import playerData   from './player-data.json'

const arr: number[] = []
for (let i = 1; i < 25; i++) arr.push(i)

const adminLogDataJson = JSON.stringify(adminLogData)
const carLogDataJson = JSON.stringify(carLogData)
const killLogDataJson = JSON.stringify(killLogData)
const carsDataJson = JSON.stringify(carsData)
const msgDataJson = JSON.stringify(msgData)
const playerDataJson = JSON.stringify(playerData)

const setActive = (active: boolean) => window.trigger('admin.active', active)

// Загрузка логов
const loadCarLog = () => window.trigger('admin.log.car', carLogDataJson)
const loadAdminLog = () => window.trigger('admin.log.admin', adminLogDataJson)
const loadKillLog = () => window.trigger('admin.log.kill', killLogDataJson)

// Загрузка сообщения в чат
const loadMsgData = () => window.trigger('admin.msg', msgDataJson)

// Загрузка информации об игроке
const loadPlayerData = () => window.trigger('admin.player', playerDataJson)

// Загрузка списка ИРЛ автомобилей
const loadCars = () => window.trigger('admin.cars', carsDataJson)

const testCarLog = () => arr.forEach(loadCarLog)
const testAdminLog = () => arr.forEach(loadAdminLog)
const testKillLog = () => arr.forEach(loadKillLog)
const testMsgData = () => arr.forEach(loadMsgData)

window.test.admin = {
  loadCars, loadCarLog, loadAdminLog, loadKillLog, setActive,
  testMsgData, testCarLog, testAdminLog, testKillLog, loadPlayerData
}