import data from '../json/create-pers-data.json'
const jsonData = JSON.stringify(data)

const setCreatePers = () => window.trigger('character.toggleCreation', jsonData)

export { setCreatePers }
