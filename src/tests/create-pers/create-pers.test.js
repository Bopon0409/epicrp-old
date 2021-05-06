import data from './create-pers-data.json'
const jsonData = JSON.stringify(data)

const setCreatePers = (active = true) =>
  window.trigger('character.toggleCreation', active, jsonData)

window.test.createPers = { setCreatePers }
