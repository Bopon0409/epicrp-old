import { makeAutoObservable } from 'mobx'

class HouseStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    mode: 3,
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
    window.frontTrigger('house.sell', this.state.houseNumber)
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

    switch (true) {
      case dragId < 100:
        return this.state.garage.find(({ placeId }) => placeId === dragId).color
      case dragId >= 101 && dragId < 200 :
        return this.state.carList
          .find(({ placeId }) => placeId === dragId)?.color
      default:
        return 'white'
    }
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
        return 'white'
    }
  }

  dragStart = ({ active }) => this.state.dragId = active.id

  swap = event => {
    this.state.dragId = 0
    if (!event.over) return
    const { active: { id: slotFrom }, over: { id: slotTo } } = event
    // Перемещение в рамках гаража
    if (slotFrom < 100 && slotTo < 100)
      this.garageSwap(slotFrom, slotTo)
    // Из списка автомобилей в гараж
    if (slotFrom >= 101 && slotFrom < 200 && slotTo < 100)
      this.moveCarToGarage(slotFrom, slotTo)

  }

  garageSwap = (slotFrom, slotTo) => {
    const indexTo = this.state.garage
      .findIndex(({ placeId }) => placeId === slotTo)
    const indexFrom = this.state.garage
      .findIndex(({ placeId }) => placeId === slotFrom)
    const list = this.state.garage
    ;[list[indexTo], list[indexFrom]] = [list[indexFrom], list[indexTo]]
  }

  moveCarToGarage = (slotFrom, slotTo) => {
    const { garage, carList } = this.state
    const isSwap = !!garage
      .find(({ placeId, carId }) => placeId === slotTo && carId)

    const garageIndex = this.state.garage
      .findIndex(({ placeId }) => placeId === slotTo)
    const moveCar = JSON.parse(JSON.stringify(
      carList.find(({ placeId }) => placeId === slotFrom)
    ))
    moveCar.placeId = garageIndex + 1
    this.state.garage[garageIndex] = moveCar

    if (isSwap) {

    } else {
      this.state.carList = carList.filter(({ placeId }) => placeId !== slotFrom)
    }
  }
}

export default new HouseStore()