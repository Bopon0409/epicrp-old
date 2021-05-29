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
    owner: null,
    userName: '',
    open: false,
    cupboardOpen: true,
    houseClass: '',
    tax: 0,
    roomQuantity: 0,
    garageAvailability: false,
    garagePlaceQuantity: 0,
    price: 0,
    roommates: [],
    garage: [],
    dragId: 0,
    sliderPosition: 0
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
    if (data.userName) this.state.userName = data.userName
    if (data.carList) this.state.carList = data.carList
    if (data.garage) this.state.garage = data.garage
    if (data.price) this.state.price = data.price
    if (data.owner) this.state.owner = data.owner
    if (data.open) this.state.open = data.open
    if (data.tax) this.state.tax = data.tax
  }

  get isOwner () {
    return this.state.userName === this.state.owner
  }

  //===========================   Roommates Manager   ==========================

  get currentRoommate () {
    this.roommatesInit()
    const { currentRoommateId, roommates } = this.state
    return roommates.find(({ id }) => id === currentRoommateId)
  }

  roommatesInit = () => {
    const { currentRoommateId, roommates } = this.state
    if (currentRoommateId === 0) this.state.currentRoommateId = roommates[0]?.id
  }

  setCurrentRoommate = id => this.state.currentRoommateId = id

  setRoommateAccess = accessName => {
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

  //============================   House Functions   ===========================

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

  sellHouse = () => window.frontTrigger('house.sell', this.state.houseNumber)

  buyHouse = () => window.frontTrigger('house.buy', this.state.houseNumber)

  enterHouse = () => {
    window.frontTrigger('house.enter.house', this.state.houseNumber)
  }

  enterGarage = () => {
    window.frontTrigger('house.enter.garage', this.state.houseNumber)
  }

  //================================   OverLay   ===============================

  get overlayCarColor () {
    const { dragId } = this.state
    if (dragId === 0) return ''
    return this.state.garage.find(({ placeId }) => placeId === dragId)?.color ||
      'green'
  }

  get overlayRoommateName () {
    return this.roommatesGarageList[this.state.dragId - 300]?.name || ''
  }

  get overlayRotate () {
    const { dragId } = this.state

    switch (true) {
      case dragId <= 6:
        return 'top'
      case dragId >= 101 && dragId < 200 :
        return 'list'
      case dragId > 6 && dragId <= 10:
        return 'bottom'
      default:
        return ''
    }
  }

  //===============================   DragNDrop   ==============================

  dragStart = ({ active }) => this.state.dragId = active.id

  dragOver = event => {
    this.state.dragId = 0
    if (!event.over) return

    const { active: { id: slotFrom }, over: { id: slotTo } } = event
    if (slotFrom === slotTo || (slotFrom > 100 && slotTo === 100)) return

    if (slotFrom >= 300) return this.roommateSet(slotFrom, slotTo)
    if (slotTo !== 100) this.garageSwap(slotFrom, slotTo)
    if (slotTo === 100) this.garageSwap(slotFrom, this.freeSlot)
  }

  getGarageItem = id => {
    return this.state.garage.find(({ placeId }) => placeId === id) ||
      { carId: null, placeId: id }
  }

  get freeSlot () {
    for (let i = 101; i < 200; i++) {
      if (!this.getGarageItem(i).carId) return i
    }
    return null
  }

  garageSwap = (slotFrom, slotTo) => {
    const item1 = this.state.garage.find(({ placeId }) => placeId === slotFrom)
    const item2 = this.state.garage.find(({ placeId }) => placeId === slotTo)
    // Проверка на изменение позиции слайдера
    this.sliderPositionCheck(slotFrom, slotTo)

    // Проверка на перемещение чужих автомобилей

    const { userName } = this.state
    if (item1 && item1.carOwner !== userName) return
    if (item2 && item2.carOwner !== userName) return

    // Проверка на перемещение в пустой слот (только для хозяина)
    if (!item2 && slotTo < 100 && !this.isOwner) return

    if (item1) item1.placeId = slotTo
    if (item2) item2.placeId = slotFrom
  }

  sliderPositionCheck = (slotFrom, slotTo) => {
    const { sliderPosition } = this.state
    const check1 = slotFrom > 100 && slotTo < 100
    const check2 = (sliderPosition + 4) === this.carListSize
    const check3 = !this.getGarageItem(slotTo).carId
    if (check1 && check2 && check3) this.state.sliderPosition--
  }

  roommateSet = (slotFrom, slotTo) => {
    const roommate = this.state.roommates.find(({id}) => id === slotFrom - 300)
    const car = roommate.cars[0]
    car.carOwner = this.state.roommates[slotFrom - 300].name
    car.placeId = slotTo
    this.state.garage.push(car)
    roommate.cars.shift()
  }

  carRemove = car => {
    const roommate = this.state.roommates
      .find(({ name }) => car.carOwner === name)
    roommate.cars.push(car)
    this.state.garage = this.state.garage
      .filter(item => item.carId !== car.carId)
  }

  get roommatesGarageList () {
    return this.state.roommates.filter(({ cars }) => cars.length)
  }

  //===============================   Car List   ===============================

  get carListSize () {
    return this.state.garage.filter(({ placeId }) => placeId >= 101).length
  }

  sliderInc = () => {
    const { sliderPosition } = this.state
    if ((sliderPosition + 4) < this.carListSize) this.state.sliderPosition++
  }

  sliderDec = () => {
    const { sliderPosition } = this.state
    if (sliderPosition > 0) this.state.sliderPosition--
  }

  get carList () {
    const { garage, sliderPosition } = this.state
    return garage.filter(({ placeId }) => placeId >= 101)
      .sort((car1, car2) => car1.placeId - car2.placeId)
      .slice(sliderPosition, sliderPosition + 4)
  }
}

export default new HouseStore()