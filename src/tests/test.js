import inventaryData from './inventaryData.json'
import alertsHudData from './alertsHudData.json'
import chatMsgData from './chatMsgData.json'

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

const setChatActive = active => {
  setTimeout(() => window.chatApi.show(active), 500)
}

const setChatInput = active => {
  setTimeout(() => window.chatApi.activate(active), 500)
}

const clearChat = () => {
  setTimeout(() => window.chatApi.clearChat(), 500)
}

function testInventory (delay = 500) {
  setTimeout(() => {
    window.trigger('pushInventaryDataToFront', JSON.stringify(inventaryData))
  }, delay)
}

function testAuthAnswer (type = true, errorMsg = '') {
  setTimeout(() => {
    window.trigger('userAuthAnswer', JSON.stringify({ type, errorMsg }))
  }, 500)
}

function testRegisterAnswer (type = true, errorMsg = '') {
  setTimeout(() => {
    window.trigger('userRegisterAnswer', JSON.stringify({ type, errorMsg }))
  }, 500)
}

const testAlerts = () => {
  let counter = 0
  const interval = setInterval(() => {
    window.trigger('addAlert', JSON.stringify(alertsHudData[counter]))
    counter++
    if (counter === 5) clearInterval(interval)
  }, 2000)
}

const testChatPushMsg = () => {
  let counter = 0
  const interval = setInterval(() => {
    const { type, text, text1, text2, result } = chatMsgData[counter]
    window.chatApi.push(type, text, text1, text2, result)
    counter++
    if (counter === chatMsgData.length) clearInterval(interval)
  }, 500)
}

window.test = {
  testAlerts,
  testInventory,
  testAuthAnswer,
  testRegisterAnswer,
  setInventoryActive,
  setHudActive,
  setAuthActive,
  setBgActive,
  setChatActive,
  setChatInput,
  testChatPushMsg,
  clearChat
}

setInventoryActive(true)
testInventory()
