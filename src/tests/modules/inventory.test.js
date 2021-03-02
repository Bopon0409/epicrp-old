import inventaryData from '../json/inventaryData.json'

const setInventoryActive = active =>
  window.trigger('setInventoryActive', active)
const testInventory = () => {
  window.trigger('pushInventaryDataToFront', JSON.stringify(inventaryData))
}

export { setInventoryActive, testInventory }
