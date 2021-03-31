import data from '../json/inventaryData.json'
const jsonData = JSON.stringify(data)

const setInventoryActive = () => window.trigger('inventory.toggle')
const testInventory = () => window.trigger('inventory.update', jsonData)

export { setInventoryActive, testInventory }
