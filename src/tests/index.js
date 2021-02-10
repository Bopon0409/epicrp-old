import inventaryData from './inventaryData.json'
import alertsHudData from './alertsHudData.json'

const openInventory = () => window.trigger('openInventory')

const closeInventory = () => window.trigger('closeInventary')

const openAuth = () => window.trigger('openAuth')

const openHUD = () => window.trigger('openHUD')

const closeHUD = () => window.trigger('closeHUD')

function testInventory (delay = 2000) {
  setTimeout(() => {
    window.trigger('pushInventaryDataToFront', JSON.stringify(inventaryData))
    window.trigger('openInventary')
  }, delay)
}

function testAuthAnswer (delay = 5000, type = true) {
  setTimeout(() => {
    const answer = { isSuccess: type, errorMsg: type ? '' : 'serverError' }
    window.trigger('userAuthAnswer', JSON.stringify(answer))
  }, delay)
}

const testAlerts = () => {
  let counter = 0
  const interval = setInterval(() => {
    window.trigger('addAlert', JSON.stringify(alertsHudData[counter]))
    counter++
    if (counter === 5) clearInterval(interval)
  }, 2000)
}

window.test = {
  testAlerts,
  testInventory,
  testAuthAnswer,
  openAuth,
  openInventory,
  openHUD,
  closeInventory,
  closeHUD
}
