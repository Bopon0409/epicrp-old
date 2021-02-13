import inventaryData from './inventaryData.json'
import alertsHudData from './alertsHudData.json'

const setInventoryActive = active => {
  setTimeout(() => window.trigger('setInventoryActive', active), 500)
}

const setAuthActive = active => {
  setTimeout(() => window.trigger('setAuthActive', active), 500)
}

const setHudActive = active => {
  setTimeout(() => window.trigger('setHudActive', active), 500)
}

const setBgActive = active => {
  setTimeout(() => window.trigger('setBgActive', active), 500)
}

function testInventory (delay = 2000) {
  setTimeout(() => {
    window.trigger('pushInventaryDataToFront', JSON.stringify(inventaryData))
  }, delay)
}

function testAuthAnswer (type = true, errorMsg = '') {
  setTimeout(() => {
    window.trigger('userAuthAnswer', type, errorMsg)
  }, 2000)
}

function testRegisterAnswer (type = true, errorMsg = '') {
  setTimeout(() => {
    window.trigger('userRegisterAnswer', type, errorMsg)
  }, 2000)
}

const testAlerts = () => {
  let counter = 0
  const interval = setInterval(() => {
    window.trigger('addAlert', JSON.stringify(alertsHudData[counter]))
    counter++
    if (counter === 5) clearInterval(interval)
  }, 2000)
}

setHudActive(true)
setBgActive(true)

window.test = {
  testAlerts,
  testInventory,
  testAuthAnswer,
  testRegisterAnswer,
  setInventoryActive,
  setHudActive,
  setAuthActive,
  setBgActive
}
