import { makeAutoObservable } from 'mobx'

class HouseStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    mode: 0,
    capabilities: {
      enterGarage: true,
      lockHouse: true,
      lockCupboard: true,
      sell: false,
      pay: true,
      roommatesManager: true,
      garageManager: true
    },
    houseNumber: 0,
    owner: '',
    open: false,
    cupboardOpen: true,
    houseClass: '',
    tax: 0,
    roomQuantity: 0,
    garageAvailability: false,
    garagePlaceQuantity: 0,
    price: 0,
    currentRoommateId: 0,
    roommates: [],
    garage: [],
    carList: [],
    dragId: 0
  }

  setMode = mode => {
    const { roommatesManager, garageManager } = this.state.capabilities
    if (!roommatesManager && mode === 4) return
    if (!garageManager && mode === 3) return
    this.state.mode = mode
  }

  setData = data => {
    if (data.garagePlaceQuantity)
      this.state.garagePlaceQuantity = data.garagePlaceQuantity
    if (data.garageAvailability)
      this.state.garageAvailability = data.garageAvailability
    if (data.capabilities) this.state.capabilities = data.capabilities
    if (data.cupboardOpen) this.state.cupboardOpen = data.cupboardOpen
    if (data.roomQuantity) this.state.roomQuantity = data.roomQuantity
    if (data.houseNumber) this.state.houseNumber = data.houseNumber
    if (data.houseClass) this.state.houseClass = data.houseClass
    if (data.roommates) this.state.roommates = data.roommates
    if (data.carList) this.state.carList = data.carList
    if (data.garage) this.state.garage = data.garage
    if (data.price) this.state.price = data.price
    if (data.owner) this.state.owner = data.owner
    if (data.open) this.state.open = data.open
    if (data.tax) this.state.tax = data.tax
  }

  get headerData () {
    switch (this.state.mode) {
      case 1:
        return {
          title: null,
          subTitle: null
        }
      case 2:
        return {
          title: 'Меню дома',
          subTitle: 'Тут вы можете управлять всеми аспектами своего дома'
        }
      case 3:
        return {
          title: 'Гараж',
          subTitle: 'Меняйте расположение своих Т/С так, как удобно Вам.'
        }
      case 4:
        return {
          title: 'Управление сожителями',
          subTitle: 'Тут вы можете управлять своими сожителями'
        }
      default:
        return null
    }
  }

  get currentRoommate () {
    this.roommatesInit()
    const { currentRoommateId, roommates } = this.state
    return roommates.find(({ id }) => id === currentRoommateId)
  }

  roommatesInit = () => {
    const { currentRoommateId, roommates } = this.state
    if (currentRoommateId === 0) this.state.currentRoommateId = roommates[0]?.id
  }

  setRoommate = id => this.state.currentRoommateId = id

  setAccess = accessName => {
    const { houseNumber } = this.state
    const { access, id } = this.currentRoommate
    const setting = access.find(({ name }) => name === accessName)
    setting.value = !setting.value
    window.frontTrigger('house.roommate.access',
      houseNumber, id, setting.name, setting.value
    )
  }

  moveRoommateOut = () => {
    const { state: { houseNumber }, currentRoommate: { id } } = this
    window.frontTrigger('house.roommate.move_out', houseNumber, id)
  }

  houseLock = () => {
    const { open, houseNumber, capabilities } = this.state
    if (capabilities.lockHouse) this.state.open = !open
    window.frontTrigger('house.lock.house', houseNumber, !open)
  }

  cupboardLock = () => {
    const { cupboardOpen, houseNumber, capabilities } = this.state
    if (capabilities.lockCupboard) this.state.cupboardOpen = !cupboardOpen
    window.frontTrigger('house.lock.cupboard', houseNumber, !cupboardOpen)
  }

  sellHouse = () => {
    this.state.owner ?
      window.frontTrigger('house.sell', this.state.houseNumber) :
      window.frontTrigger('house.buy', this.state.houseNumber)
  }

  enterHouse = () => {
    window.frontTrigger('house.enter.house', this.state.houseNumber)
  }

  enterGarage = () => {
    window.frontTrigger('house.enter.garage', this.state.houseNumber)
  }

  get carColor () {
    const { dragId } = this.state
    if (dragId === 0) return ''
    return this.state.garage.find(({ placeId }) => placeId === dragId).color
  }

  get overlayRotate () {
    const { dragId } = this.state
    if (dragId === 0) return ''

    switch (true) {
      case dragId < 100:
        return 'top'
      case dragId >= 101 && dragId < 200 :
        return 'list'
      default:
        return ''
    }
  }

  dragStart = ({ active }) => this.state.dragId = active.id

  getGarageItem = id => {
    return this.state.garage.find(({ placeId }) => placeId === id) ||
      { carId: null, placeId: id }
  }

  get carList () {
    return this.state.garage.filter(({ placeId }) => placeId >= 101)
      .sort((item1, item2) => item1.placeId - item2.placeId)
  }

  swap = event => {
    this.state.dragId = 0
    if (!event.over) return
    const { active: { id: slotFrom }, over: { id: slotTo } } = event
    this.garageSwap(slotFrom, slotTo)
  }

  garageSwap = (slotFrom, slotTo) => {
    const item1 = this.state.garage.find(({ placeId }) => placeId === slotFrom)
    const item2 = this.state.garage.find(({ placeId }) => placeId === slotTo)
    if (item1) item1.placeId = slotTo
    if (item2) item2.placeId = slotFrom
  }
}

export default new HouseStore()