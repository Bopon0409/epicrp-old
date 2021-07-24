import data from './persData.json'

const jsonData = JSON.stringify(data)

const setChoicePers = (active: boolean = true) =>
  window.trigger('character.toggleMenu', active, jsonData)

window.test.choisePers = { setChoicePers }
