import inventaryData from './inventaryData.json'
import alertsHudData from './alertsHudData.json'

const openInventory = () => window.trigger('openInventory')

const closeInventory = () => window.trigger('closeInventory')

const openAuth = () => window.trigger('openAuth')

const openHUD = () => window.trigger('openHUD')

const closeHUD = () => window.trigger('closeHUD')

const openBg = () => window.trigger('openBg')

const closeBg = () => window.trigger('closeBg')

function testInventory (delay = 2000) {
  setTimeout(() => {
    window.trigger('pushInventaryDataToFront', JSON.stringify(inventaryData))
  }, delay)
}

function testAuthAnswer (type = true) {
  setTimeout(() => {
    const answer = { isSuccess: type, errorMsg: type ? '' : 'serverError' }
    window.trigger('userAuthAnswer', JSON.stringify(answer))
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

window.test = {
  testAlerts,
  testInventory,
  testAuthAnswer,
  openAuth,
  openInventory,
  openHUD,
  closeInventory,
  closeHUD,
  openBg,
  closeBg
}

testInventory()

setTimeout(() => openInventory(), 500)
