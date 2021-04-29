import data from './persData.json'
const jsonData = JSON.stringify(data)

const setChoicePers = (active = true) =>
  window.trigger('character.toggleMenu', active, jsonData)

window.test.choisePers = { setChoicePers }
