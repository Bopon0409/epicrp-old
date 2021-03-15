import persData from '../json/persData.json'

const setPersData = () =>
  window.trigger('pushPersData', JSON.stringify(persData))

const setChoicePersActive = active =>
  window.trigger('setChoicePersActive', active)

export { setPersData, setChoicePersActive }
