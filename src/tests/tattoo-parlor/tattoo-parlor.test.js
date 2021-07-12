import data from './tattoo-parlor-data.json'

const jsonData = JSON.stringify(data)

const setActive = (active) => window.trigger('tattoo-parlor.active', active)
const setData = () => window.trigger('tattoo-parlor.data', jsonData)

window.test.tattooParlor = { setActive, setData }