import inventaryData from './inventaryData.json'
import alertsHudData from './alertsHudData.json'
import chatMsgData from './chatMsgData.json'

import hudData from './hudData.json'
import geoHudData from './geoHudData.json'
import microHudData from './microHudData.json'
import missionHudData from './missionHudData.json'
import speedometerHudData from './speedometerHudData.json'
import allHudData from './allHudData.json'

const setInventoryActive = active => {
  window.trigger('setInventoryActive', active)
}

const setAuthActive = active => {
  window.trigger('setAuthActive', active)
}

const setHudActive = active => {
  window.trigger('setHudActive', active)
}

const setBgActive = active => {
  window.trigger('setBgActive', active)
}

const setChatActive = active => {
  window.chatApi.show(active)
}

const setChatInput = active => {
  window.chatApi.activate(active)
}

const clearChat = () => {
  window.chatApi.clearChat()
}

function testInventory () {
  window.trigger('pushInventaryDataToFront', JSON.stringify(inventaryData))
}

function testAuthAnswer (data) {
  window.trigger('userAuthAnswer', data)
}

function testRegisterAnswer (data) {
  window.trigger('userRegisterAnswer', data)
}

const testAlerts = () => {
  let counter = 0
  const interval = setInterval(() => {
    const strData = JSON.stringify(alertsHudData[counter])
    window.trigger('addAlert', strData)
    counter++
    if (counter === 5) clearInterval(interval)
  }, 2000)
}

const testChatPushMsg = () => {
  let counter = 0
  const interval = setInterval(() => {
    window.chatApi.push(chatMsgData[counter++])
    if (counter === chatMsgData.length) clearInterval(interval)
  }, 500)
}

const setHudData = () => {
  window.trigger('setHudData', JSON.stringify(hudData))
}

const setGeoHudData = () => {
  window.trigger('setGeoHudData', JSON.stringify(geoHudData))
}

const setMicroHudData = () => {
  window.trigger('setMicroHudData', JSON.stringify(microHudData))
}

const setMissionHudData = () => {
  window.trigger('setMissionHudData', JSON.stringify(missionHudData))
}

const setSpeedometerHudData = () => {
  window.trigger('setSpeedometerHudData', JSON.stringify(speedometerHudData))
}

const setAllHudData = () => {
  window.trigger('setAllHudData', JSON.stringify(allHudData))
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
  clearChat,
  setHudData,
  setGeoHudData,
  setMicroHudData,
  setMissionHudData,
  setSpeedometerHudData,
  setAllHudData
}

const currentTests = () => {
  setInventoryActive(true)
}

setTimeout(currentTests, 500)
