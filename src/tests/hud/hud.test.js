import alertsHudData from './alertsHudData.json'
import hudData from './hudData.json'
import geoHudData from './geoHudData.json'
import microHudData from './microHudData.json'
import missionHudData from './missionHudData.json'
import allHudData from './allHudData.json'
import timeHudData from './timeHudData.json'

const testAlerts = () => {
  let counter = 0
  const interval = setInterval(() => {
    window.trigger('hud.notify', JSON.stringify(alertsHudData[counter++]))
    if (counter === 5) clearInterval(interval)
  }, 2000)
}

const setHudActive = (active = true) => window.trigger('hud.toggle', active)
const setHudData = () => window.trigger('hud.setData', JSON.stringify(hudData))
const setOnlineHudData = () => window.trigger('hud.online', 1500)
const setTimeHudData = () =>
  window.trigger('hud.time', JSON.stringify(timeHudData))
const setGeoHudData = () =>
  window.trigger('hud.geo', JSON.stringify(geoHudData))
const setMicroHudData = () =>
  window.trigger('hud.micro', JSON.stringify(microHudData))
const setMissionHudData = () =>
  window.trigger('hud.mission', JSON.stringify(missionHudData))
const setAllHudData = () =>
  window.trigger('hud.setAllData', JSON.stringify(allHudData))

window.test.hud = {
  setHudActive,
  testAlerts,
  setHudData,
  setGeoHudData,
  setMicroHudData,
  setMissionHudData,
  setAllHudData,
  setOnlineHudData,
  setTimeHudData
}
