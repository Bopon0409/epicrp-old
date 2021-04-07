import data0 from './inventaryData0.json'
import data1 from './inventaryData1.json'
import data2 from './inventaryData2.json'
import data3 from './inventaryData3.json'
import data4 from './inventaryData4.json'

const jsonData0 = JSON.stringify(data0)
const jsonData1 = JSON.stringify(data1)
const jsonData2 = JSON.stringify(data2)
const jsonData3 = JSON.stringify(data3)
const jsonData4 = JSON.stringify(data4)

const setInventoryActive = (active = true, id) =>
  window.trigger('inventory.toggle', active, id || null)

const testInventory = () => {
  window.trigger('inventory.update', jsonData0)
  window.trigger('inventory.update', jsonData1)
  window.trigger('inventory.update', jsonData2)
  window.trigger('inventory.update', jsonData3)
  window.trigger('inventory.update', jsonData4)
}

export { setInventoryActive, testInventory }
