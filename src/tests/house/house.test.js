import data from './house-data.json'

const openHouseOutside = () => window.trigger('house.mode', 1)
const openHouseInside = () => window.trigger('house.mode', 2)
const openHouseGarage = () => window.trigger('house.mode', 3)
const closeHouse = () => window.trigger('house.mode')
const setData = () => window.trigger('house.data', JSON.stringify(data))

window.test.house = {
  openHouseOutside,
  openHouseInside,
  openHouseGarage,
  closeHouse,
  setData
}