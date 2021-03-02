/* eslint-disable */
import { setBgActive } from './modules/bg.test'
import { setCreatePersActive } from './modules/create-pers.test'
import { setInventoryActive, testInventory } from './modules/inventory.test'
import { setPersData, setChoicePersActive } from './modules/choice-pers.test'
import {
  setAuthActive,
  testAuthAnswer,
  testRegisterAnswer
} from './modules/auth.test'
import {
  setChatActive,
  setChatShow,
  clearChat,
  testChatPushMsg
} from './modules/chat.test'
import {
  testAlerts,
  setHudData,
  setGeoHudData,
  setMicroHudData,
  setMissionHudData,
  setSpeedometerHudData,
  setAllHudData,
  setHudActive
} from './modules/hud.test'

window.test = {
  testInventory,
  testAlerts,
  testAuthAnswer,
  testRegisterAnswer,
  setInventoryActive,
  setHudActive,
  setAuthActive,
  setBgActive,
  setChoicePersActive,
  setChatActive,
  setChatShow,
  testChatPushMsg,
  clearChat,
  setHudData,
  setGeoHudData,
  setMicroHudData,
  setMissionHudData,
  setSpeedometerHudData,
  setAllHudData,
  setPersData,
  setCreatePersActive
}

// current tests
setTimeout(() => {
  setBgActive(true)
  setInventoryActive(true)
  testInventory()
}, 500)
