import inventaryData from './json/inventaryData.json'
import alertsHudData from './json/alertsHudData.json'
import chatMsgData from './json/chatMsgData.json'
import hudData from './json/hudData.json'
import geoHudData from './json/geoHudData.json'
import microHudData from './json/microHudData.json'
import missionHudData from './json/missionHudData.json'
import speedometerHudData from './json/speedometerHudData.json'
import allHudData from './json/allHudData.json'
import persData from './json/persData.json'

const setInventoryActive = active =>
  window.trigger('setInventoryActive', active)
const setChoicePersActive = active =>
  window.trigger('setChoicePersActive', active)
const setAuthActive = active => window.trigger('setAuthActive', active)
const setHudActive = active => window.trigger('setHudActive', active)
const setBgActive = active => window.trigger('setBgActive', active)
const setChatActive = active => window.chatApi.show(active)
const setChatInput = active => window.chatApi.activate(active)
const clearChat = () => window.chatApi.clearChat()

const testAuthAnswer = data => window.trigger('userAuthAnswer', data)
const testRegisterAnswer = data => window.trigger('userRegisterAnswer', data)

const testInventory = () => {
  window.trigger('pushInventaryDataToFront', JSON.stringify(inventaryData))
}

const testAlerts = () => {
  let counter = 0
  const interval = setInterval(() => {
    window.trigger('addAlert', JSON.stringify(alertsHudData[counter++]))
    if (counter === 5) clearInterval(interval)
  }, 2000)
}

const testChatPushMsg = () => {
  let counter = 0
  const interval = setInterval(() => {
    window.chatApi.push(JSON.stringify(chatMsgData[counter++]))
    if (counter === chatMsgData.length) clearInterval(interval)
  }, 500)
}

const setPersData = () =>
  window.trigger('pushPersData', JSON.stringify(persData))

const setHudData = () => window.trigger('setHudData', JSON.stringify(hudData))

const setGeoHudData = () =>
  window.trigger('setGeoHudData', JSON.stringify(geoHudData))

const setMicroHudData = () =>
  window.trigger('setMicroHudData', JSON.stringify(microHudData))

const setMissionHudData = () =>
  window.trigger('setMissionHudData', JSON.stringify(missionHudData))

const setSpeedometerHudData = () =>
  window.trigger('setSpeedometerHudData', JSON.stringify(speedometerHudData))

const setAllHudData = () =>
  window.trigger('setAllHudData', JSON.stringify(allHudData))

window.test = {
  testAlerts,
  testInventory,
  testAuthAnswer,
  testRegisterAnswer,
  setInventoryActive,
  setHudActive,
  setAuthActive,
  setBgActive,
  setChoicePersActive,
  setChatActive,
  setChatInput,
  testChatPushMsg,
  clearChat,
  setHudData,
  setGeoHudData,
  setMicroHudData,
  setMissionHudData,
  setSpeedometerHudData,
  setAllHudData,
  setPersData
}

const currentTests = () => {
  setBgActive(true)
  setChoicePersActive(true)
  setPersData()
}

setTimeout(currentTests, 500)
