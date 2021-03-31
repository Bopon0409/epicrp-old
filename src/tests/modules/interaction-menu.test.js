import interactionMenuData from '../json/interactionMenuData.json'
const jsonData = JSON.stringify(interactionMenuData)

const setInteractionMenu = () =>
  window.trigger('interaction-menu.toggle', jsonData)

export { setInteractionMenu }
