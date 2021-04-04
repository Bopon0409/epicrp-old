import data from '../json/create-pers-data.json'
const jsonData = JSON.stringify(data)

const setCreatePers = (active = true) =>
  window.trigger('character.toggleCreation', active, jsonData)

export { setCreatePers }
