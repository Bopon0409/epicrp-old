import data from '../json/persData.json'
const jsonData = JSON.stringify(data)

const setChoicePers = (active = true) =>
  window.trigger('character.toggleMenu', active, jsonData)

export { setChoicePers }
