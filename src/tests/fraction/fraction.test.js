import data from './fraction.json'
const jsonData = JSON.stringify(data)

const setActive = active => window.trigger('fraction.active', active)
const setFractionData = () => window.trigger('fraction.data', jsonData)

export { setActive, setFractionData }
