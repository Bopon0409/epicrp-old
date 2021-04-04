import interactionMenuData from '../json/interactionMenuData.json'
const jsonData = JSON.stringify(interactionMenuData)

const setInteractionMenu = (active = true) =>
  window.trigger('interaction-menu.toggle', active, jsonData)

export { setInteractionMenu }
