import data from './fraction.json'
import activityData1 from './activityData1.json'
import activityData2 from './activityData2.json'
import activityData3 from './activityData3.json'

const jsonData = JSON.stringify(data)
const jsonActivity1 = JSON.stringify(activityData1)
const jsonActivity2 = JSON.stringify(activityData2)
const jsonActivity3 = JSON.stringify(activityData3)

const setActive = active => window.trigger('fraction.active', active)
const setData = () => window.trigger('fraction.data', jsonData)

const setActivity1 = () => window.trigger('fraction.activity', jsonActivity1)
const setActivity2 = () => window.trigger('fraction.activity', jsonActivity2)
const setActivity3 = () => window.trigger('fraction.activity', jsonActivity3)

window.test.fraction = {
  setActive,
  setData,
  setActivity1,
  setActivity2,
  setActivity3
}
