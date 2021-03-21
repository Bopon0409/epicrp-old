import data from '../json/persData.json'

const setChoicePers = active =>
  window.trigger('setChoicePers', active, JSON.stringify(data))

export { setChoicePers }
