import data from '../json/persData.json'
const jsonData = JSON.stringify(data)

const setChoicePers = () => window.trigger('character.toggleMenu', jsonData)

export { setChoicePers }
