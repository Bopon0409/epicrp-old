import alertsHudData from '../json/alertsHudData.json'
import hudData from '../json/hudData.json'
import geoHudData from '../json/geoHudData.json'
import microHudData from '../json/microHudData.json'
import missionHudData from '../json/missionHudData.json'
import speedometerHudData from '../json/speedometerHudData.json'
import allHudData from '../json/allHudData.json'
import timeHudData from '../json/timeHudData.json'

const testAlerts = () => {
  let counter = 0
  const interval = setInterval(() => {
    window.trigger('hud.notify', JSON.stringify(alertsHudData[counter++]))
    if (counter === 5) clearInterval(interval)
  }, 2000)
}

const setHudActive = () => window.trigger('hud.toggle')
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
const setSpeedometerHudData = () =>
  window.trigger('hud.speed', JSON.stringify(speedometerHudData))
const setAllHudData = () =>
  window.trigger('hud.setAllData', JSON.stringify(allHudData))

export {
  setHudActive,
  testAlerts,
  setHudData,
  setGeoHudData,
  setMicroHudData,
  setMissionHudData,
  setSpeedometerHudData,
  setAllHudData,
  setOnlineHudData,
  setTimeHudData
}
