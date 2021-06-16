import adminLogData from './admin-log-data.json'
import carLogData   from './car-log-data.json'
import killLogData  from './kil-log-data.json'
import carsData     from './cars-data.json'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const adminLogDataJson = JSON.stringify(adminLogData)
const carLogDataJson = JSON.stringify(carLogData)
const killLogDataJson = JSON.stringify(killLogData)
const carsDataJson = JSON.stringify(carsData)

const loadCars = () => window.trigger('admin.cars', carsDataJson)
const loadCarLog = () => window.trigger('admin.log.car', carLogDataJson)
const loadAdminLog = () => window.trigger('admin.log.admin', adminLogDataJson)
const loadKillLog = () => window.trigger('admin.log.kill', killLogDataJson)

const testLoadCars = () => arr.forEach(loadCars)
const testCarLog = () => arr.forEach(loadCarLog)
const testAdminLog = () => arr.forEach(loadAdminLog)
const testKillLog = () => arr.forEach(loadKillLog)

window.test.admin = {
  loadCars, loadCarLog, loadAdminLog, loadKillLog,
  testLoadCars, testCarLog, testAdminLog, testKillLog
}