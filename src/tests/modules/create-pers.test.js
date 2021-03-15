import data from '../json/create-pers-data.json'

const setCreatePersActive = active =>
  window.trigger('setCreatePersActive', active)

const pushCreatePersData = () =>
  window.trigger('pushCreatePersData', JSON.stringify(data))

export { setCreatePersActive, pushCreatePersData }
