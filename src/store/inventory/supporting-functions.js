const getSlotQuantity = bagType => {
  switch (bagType) {
    case 0:
      return 25
    case 1:
      return 30
    case 2:
      return 35
    case 3:
      return 35
    default:
      break
  }
}

const getMaxWeight = bagType => {
  switch (bagType) {
    case 0:
      return 10
    case 1:
      return 10
    case 2:
      return 10
    case 3:
      return 10
  }
}

const trigger = (triggerName, id) => {
  if (window.mp) {
    switch (triggerName) {
      case 'putOn':
        window.mp.trigger('userPutOnInventaryItem', id)
        break
      case 'putOff':
        window.mp.trigger('userPutOffInventaryItem', id)
        break
      case 'use':
        window.mp.trigger('userUseInventaryItem', id)
        break
      case 'update':
        window.mp.trigger(
          'pushInventoryDataToClient',
          JSON.stringify(this.state.inventory)
        )
        break
      default:
        break
    }
  }
}

export { getSlotQuantity, trigger, getMaxWeight }
