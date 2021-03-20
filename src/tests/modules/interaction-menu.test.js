import interactionMenuData from '../json/interactionMenuData.json'

const setInteractionMenu = active =>
  window.trigger(
    'setInteractionMenu',
    active,
    JSON.stringify(interactionMenuData)
  )

export { setInteractionMenu }
