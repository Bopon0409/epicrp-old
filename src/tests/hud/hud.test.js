import missionData from './missionData.json'
import onlineData  from './onlineData.json'
import alertsData  from './alertsData.json'
import microData   from './microData.json'
import timeData    from './timeData.json'
import hudData     from './hudData.json'
import geoData     from './geoData.json'
import allData     from './allData.json'

const setActive = (active = true) => window.trigger('hud.toggle', active)
const setHidden = hidden => window.trigger('hud.hidden', hidden)
const setMission = () => window.trigger('hud.data', JSON.stringify(missionData))
const setAllData = () => window.trigger('hud.data', JSON.stringify(allData))
const setMicro = () => window.trigger('hud.data', JSON.stringify(microData))
const setOnline = () => window.trigger('hud.data', JSON.stringify(onlineData))
const setTime = () => window.trigger('hud.data', JSON.stringify(timeData))
const setData = () => window.trigger('hud.data', JSON.stringify(hudData))
const setGeo = () => window.trigger('hud.data', JSON.stringify(geoData))
const testAlerts = () => {
  let counter = 0
  const interval = setInterval(() => {
    window.trigger('hud.notify', JSON.stringify(alertsData[counter++]))
    if (counter === 5) clearInterval(interval)
  }, 500)
}

window.test.hud = {
  testAlerts,
  setMission,
  setAllData,
  setOnline,
  setActive,
  setMicro,
  setTime,
  setData,
  setGeo,
  setHidden
}
