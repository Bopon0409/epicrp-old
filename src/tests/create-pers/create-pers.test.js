import data from './create-pers-data.json'

const jsonData = JSON.stringify(data)

const setActive = (active = true) => window.trigger('character.active', active)
const setData = () => window.trigger('character.data', jsonData)

window.test.createPers = { setActive, setData }
