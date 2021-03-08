import alertsHudData from '../json/alertsHudData.json'
import hudData from '../json/hudData.json'
import geoHudData from '../json/geoHudData.json'
import microHudData from '../json/microHudData.json'
import missionHudData from '../json/missionHudData.json'
import speedometerHudData from '../json/speedometerHudData.json'
import allHudData from '../json/allHudData.json'

const testAlerts = () => {
  let counter = 0
  const interval = setInterval(() => {
    window.trigger('addAlert', JSON.stringify(alertsHudData[counter++]))
    if (counter === 5) clearInterval(interval)
  }, 2000)
}

const setHudActive = active => window.trigger('setHudActive', active)
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

export {
  setHudActive,
  testAlerts,
  setHudData,
  setGeoHudData,
  setMicroHudData,
  setMissionHudData,
  setSpeedometerHudData,
  setAllHudData
}