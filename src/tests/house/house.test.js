import data from './house-data.json'

// Открыть меню дома снаружи
const openHouseOutside = () => window.trigger('house.mode', 1)

// Открыть меню дома внутри
const openHouseInside = () => window.trigger('house.mode', 2)

// Открыть гараж
const openHouseGarage = () => window.trigger('house.mode', 3)

// Открыть меню сожителей
const openHouseRoommates = () => window.trigger('house.mode', 4)

// Закрыть меню дома
const closeHouse = () => window.trigger('house.mode', 0)
const setData = () => window.trigger('house.data', JSON.stringify(data))

window.test.house = {
  openHouseRoommates,
  openHouseOutside,
  openHouseInside,
  openHouseGarage,
  closeHouse,
  setData
}