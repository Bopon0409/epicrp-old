import data from './create-pers-data.json'

const jsonData = JSON.stringify(data)

const setActive = (active = true) => window.trigger('character.active', active)
const setData = () => window.trigger('character.data', jsonData)

// Изменение страницы создания
const validationResult = (result: boolean) =>
  window.trigger('character.validation', result)

window.test.createPers = { setActive, setData, validationResult }
