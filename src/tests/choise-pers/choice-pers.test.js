import data from './persData.json'
import data2 from './persData2.json'
const jsonData = JSON.stringify(data)
const jsonData2 = JSON.stringify(data2)

const setChoicePers = (active = true) =>
  window.trigger('character.toggleMenu', active, jsonData)
const setChoicePers2 = (active = true) =>
  window.trigger('character.toggleMenu', active, jsonData2)

window.test.choisePers = { setChoicePers, setChoicePers2 }
