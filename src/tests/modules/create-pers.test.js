import data from '../json/create-pers-data.json'

const setCreatePers = active =>
  window.trigger('setCreatePers', active, JSON.stringify(data))

export { setCreatePers }
