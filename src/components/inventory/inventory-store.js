import { makeAutoObservable } from 'mobx'
import { uData }              from '../../services/services'

class InventoryStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    active: false,
    drugId: 0,
    mode: 0,
    modal: {
      isActive: false,
      item: {},
      xCord: 0,
      yCord: 0,
      action: '',
      sliderValue: 0
    },
    userIndicators: {
      food: 100,
      water: 100,
      health: 100
    },
    clickParams: {
      isClicked: false,
      timer: null
    },
    trade: {
      tradeName: '',
      input1: '',
      input2: '',
      isReady1: false,
      isReady2: false,
      maxMoney: 0,
      isFinish: false
    },
    trunk: {
      trunkName: '',
      trunkSize: 0,
      trunkMaxWeight: 1000
    },
    inventory: []
  }

  // ============================   INVENTORY ID   =============================

  // Инвентарь: 0
  // Trade мой: 1
  // Trade чужой: 2
  // Склад: 3
  // Багажник: 4

  // ================================   MAIN   =================================
  setInventoryData = data => {
    let inventoryId = 0

    // Чтение конфига, и выпиливание его из массива предметов
    data = data.filter(el => {
      if (el.type === 'config') {
        inventoryId = el.inventoryId

        this.state.trunk = {
          trunkName: el.trunkName || this.state.trunk.trunkName,
          trunkSize: el.trunkSize || this.state.trunk.trunkSize,
          trunkMaxWeight: el.trunkMaxWeight || this.state.trunk.trunkMaxWeight
        }

        this.state.trade = {
          tradeName: el.tradeName || this.state.trade.tradeName,
          input1: el.input1 || this.state.trade.input1,
          input2: el.money || this.state.trade.input2,
          isReady1: el.isReady1 || this.state.trade.isReady1,
          isReady2: el.isReady || this.state.trade.isReady2,
          maxMoney: el.maxMoney || this.state.trade.maxMoney,
          isFinish: el.isFinish || this.state.trade.isFinish
        }
        return false
      }
      return true
    })

    // Удаление предыдущей версии инвентаря
    this.cleanInventory(inventoryId)

    // Конвертация и загрузка данных в state
    this.convertData(uData(data), inventoryId)
      ?.forEach(el => this.state.inventory.push(el))
  }

  // Конвертация предметов в формат фронта
  convertData = (data, id = 0) => data.map(el => this.convertItem(el, id))

  convertItem = (item, id = 0) => {
    switch (id) {
      case 0:
        return item
      case 1:
        return { ...item, idSlot: item.idSlot + 300 }
      case 2:
        return { ...item, idSlot: item.idSlot + 350 }
      case 3:
        return { ...item, idSlot: item.idSlot + 400 }
      case 4:
        return { ...item, idSlot: item.idSlot + 600 }
      default:
        return item
    }
  }

  // Очистка предметов одного из инвентарей (перед загрузкой с сервера)
  cleanInventory = inventoryId => {
    let min, max
    switch (inventoryId) {
      case 0:
        min = 1
        max = 212
        break
      case 1:
        min = 301
        max = 350
        break
      case 2:
        min = 351
        max = 400
        break
      case 3:
        min = 401
        max = 600
        break
      case 4:
        min = 601
        max = 1000
        break
      default:
        break
    }

    this.state.inventory = this.state.inventory.filter(
      ({ idSlot }) => !(idSlot >= min && idSlot <= max)
    )
  }

  // Триггеры, отправляемые на сервер
  getInventoryId = idSlot => {
    switch (true) {
      case idSlot >= 1 && idSlot <= 212:
        return { id: idSlot, inventoryId: 0 }
      case idSlot >= 301 && idSlot <= 350:
        return { id: idSlot - 300, inventoryId: 1 }
      case idSlot >= 351 && idSlot <= 400:
        return { id: idSlot - 350, inventoryId: 2 }
      case idSlot >= 401 && idSlot <= 600:
        return { id: idSlot - 400, inventoryId: 3 }
      case idSlot >= 601 && idSlot < 1000:
        return { id: idSlot - 600, inventoryId: 4 }
      default:
        break
    }
  }

  trigger = (triggerName, item) => {
    const { id, inventoryId } = this.getInventoryId(item.idSlot)
    switch (triggerName) {
      case 'putOn':
        return window.frontTrigger('inventory.equip',
          { idSlot: id, inventoryId }
        )
      case 'putOff':
        return window.frontTrigger('inventory.take',
          { idSlot: id, inventoryId }
        )
      case 'use':
        return window.frontTrigger('inventory.use',
          { idSlot: id, inventoryId }
        )
      default:
        break
    }
  }

  // ==========================   CALCULATED VALUES   ==========================

  get armor () {
    return (
      this.state.inventory.find(el => el.armor && el.idSlot === 206)?.armor || 0
    )
  }

  get bagType () {
    return (
      this.state.inventory.find(el => el.bag && el.idSlot === 212)?.bag || 0
    )
  }

  get bagWeight () {
    let weight = 0.2
    this.state.inventory.forEach(el => {
      if (el.idSlot >= 51 && el.idSlot <= 60) weight += el.weight * el.quantity
    })
    return weight
  }

  get stockWeight () {
    let totalWeight = 0
    for (let i = 401; i <= 500; i++) {
      const item = this.getItem(i)
      if (item) totalWeight += item.weight * item.quantity
    }
    return totalWeight.toFixed(1)
  }

  get trunkWeight () {
    let totalWeight = 0
    for (let i = 601; i <= 1000; i++) {
      const item = this.getItem(i)
      if (item) totalWeight += item.weight * item.quantity
    }
    return totalWeight.toFixed(1)
  }

  get inventoryWeight () {
    let totalWeight = 0
    this.state.inventory.forEach(item => {
      if ((item.idSlot >= 1 && item.idSlot <= 25) || item.idSlot === 212) {
        if (item.bag) totalWeight += this.bagWeight
        else totalWeight += item.weight * item.quantity
      }
    })
    return totalWeight.toFixed(1)
  }

  get inventoryMaxWeight () {
    switch (this.bagType) {
      case 0:
        return 10
      case 1:
        return 15
      case 2:
        return 17
      case 3:
        return 20
      default:
        return 10
    }
  }

  // Возвращает свободный слот, или 1 слот, если все заняты
  get freeFastSlot () {
    for (let i = 101; i < 104; i++) {
      if (!this.getItem(i)) return i
    }
    return 100
  }

  // Возвращает свободный слот, или false, если все заняты
  get freeInventorySlot () {
    for (let i = 1; i < this.getSlotQuantity(this.bagType); i++) {
      if (!this.getItem(i)) return i
    }
    return false
  }

  getSlotQuantity = bagType => {
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

  // ============================   ITEMS ACTIONS   ============================

  getItem = idSlot => this.state.inventory.find(el => el.idSlot === idSlot)

  deleteItem = idSlot => {
    this.state.inventory = this.state.inventory.filter(
      el => el.idSlot !== idSlot
    )

    const { id, inventoryId } = this.getInventoryId((idSlot))
    window.frontTrigger('inventory.drop', {
      idSlot: id, inventoryId
    })
  }

  // Уменьшение количества предметов в слоте
  decreaseItem = idSlot => {
    const { quantity } = this.getItem(idSlot)
    if (quantity === 1) this.deleteItem(idSlot)
    else {
      this.state.inventory.forEach(el => el.idSlot === idSlot && el.quantity--)
    }
  }

  // Слияние предметов
  mergeItems = (item1, item2) => {
    const { inventory } = this.state
    const sum = item1.quantity + item2.quantity
    const newInventory = inventory.filter(el => el.idSlot !== item1.idSlot)
    newInventory.forEach(el => {
      if (el.idSlot === item2.idSlot) el.quantity = sum
    })
    this.state.inventory = newInventory
    window.frontTrigger('inventory.merge', {
      item1: {
        idSlot: this.getInventoryId(item1.idSlot).id,
        inventoryId: this.getInventoryId(item1.idSlot).inventoryId
      },
      item2: {
        idSlot: this.getInventoryId(item2.idSlot).id,
        inventoryId: this.getInventoryId(item2.idSlot).inventoryId
      }
    })
  }

  // Использование предмета (Главная функция)
  useItem = idSlot => {
    const item = this.getItem(idSlot)
    // Проверка на надеваемый предмет
    if (item.equipmentSlot || item.isFastSlot) {
      // Проверка надет ли предмет
      const isEquipped =
        item.idSlot === item.equipmentSlot ||
        (item.idSlot >= 101 && item.idSlot <= 104)
      isEquipped ? this.putOffItem(idSlot) : this.putOnItem(idSlot)
    } else this.useConsumableItem(idSlot)
  }

  // Использование расходных предметов
  useConsumableItem = idSlot => {
    const item = this.getItem(idSlot)
    item.quantity > 1 ? this.decreaseItem(idSlot) : this.deleteItem(idSlot)
    this.trigger('use', item)
  }

  // Надевание экипировки
  putOnItem = idSlot => {
    const item = this.getItem(idSlot)
    if (item.equipmentSlot) this.swap(idSlot, item.equipmentSlot)
    else if (item.isFastSlot) this.swap(idSlot, this.freeFastSlot)
  }

  // Снятие экипировки
  putOffItem = idSlot => {
    const freeSlot = this.freeInventorySlot
    if (freeSlot) this.swap(idSlot, freeSlot)
  }

  // Разделение предмета
  separateItem = (idSlot, quantity) => {
    const freeSlot = this.freeInventorySlot
    if (freeSlot) {
      this.state.inventory.forEach(el => {
        if (el.idSlot === idSlot) el.quantity -= quantity
      })
      const newItem = JSON.parse(JSON.stringify(this.getItem(idSlot)))
      newItem.quantity = quantity
      newItem.idSlot = freeSlot
      this.state.inventory.push(newItem)

      window.frontTrigger('inventory.separate', {
        item1: {
          idSlot: this.getInventoryId(idSlot).id,
          inventoryId: this.getInventoryId(idSlot).inventoryId
        },
        item2: {
          idSlot: this.getInventoryId(freeSlot).id,
          inventoryId: this.getInventoryId(freeSlot).inventoryId
        },
        quantity
      })
    }
  }

  // ============================   SWAP CHECKS   ==============================

  // Проверка на надевание (для отправки на сервер)
  swapCheckPutOn = (fromSlot, toSlot, item) => {
    if (fromSlot >= 100 && fromSlot <= 104 && toSlot >= 100 && toSlot <= 104)
      return
    if (toSlot >= 101 && toSlot <= 212)
      this.trigger('putOn', item)
  }

  // Проверка на снятие (для отправки на сервер)
  swapCheckPutOff = (fromSlot, toSlot, item) => {
    if (fromSlot >= 100 && fromSlot <= 104 && toSlot >= 100 && toSlot <= 104)
      return
    if (fromSlot >= 101 && fromSlot <= 212)
      this.trigger('putOff', item)
  }

  // Проверка на слияние предметов
  swapCheckMergeItems = (item1, item2) => {
    if (item2) {
      const isEqual = item1.idItem === item2.idItem
      const isDifferentSlots = item1.idSlot !== item2.idSlot
      const isMerged = !item1.equipmentSlot && !item1.isFastSlot
      if (isDifferentSlots && isEqual && isMerged) {
        this.mergeItems(item1, item2)
        return false
      }
    }
    return true
  }

  // Проверка на перемещение сумки в сумку
  swapCheckBagInBag = (toSlot, fromSlot, item1, item2) => {
    if (item1.bag && toSlot >= 51 && toSlot <= 60) return false
    if (item2) if (item2.bag && fromSlot >= 26 && fromSlot <= 35) return false
    return true
  }

  // Проверки на возможность надевания/снятия
  swapCheckPutOnPutOff = (toSlot, fromSlot, item1, item2) => {
    if (toSlot >= 101 && toSlot <= 104 && !item1.isFastSlot) return false
    if (!item1.equipmentSlot && toSlot >= 201 && toSlot <= 212) return false
    if (
      item1.equipmentSlot &&
      toSlot >= 201 &&
      toSlot <= 212 &&
      item1.equipmentSlot !== toSlot
    )
      return false

    if (item2) {
      if (!item2.equipmentSlot && fromSlot >= 201 && fromSlot <= 212)
        return false
      if (
        item2.equipmentSlot &&
        fromSlot >= 201 &&
        fromSlot <= 212 &&
        item2.equipmentSlot !== fromSlot
      )
        return false
      if (fromSlot >= 101 && fromSlot <= 104 && !item2.isFastSlot) return false
    }
    return true
  }

  weightCheck = (fromSlot, toSlot) => {
    const { inventoryId } = this.getInventoryId(toSlot)
    // Проверка на одинаковые id инвентарей
    if (inventoryId === this.getInventoryId(fromSlot).inventoryId) return true
    let weight, maxWeight

    switch (inventoryId) {
      case 1:
      case 2:
        // Trade не ограничен по весу
        return true
      case 0:
        weight = this.inventoryWeight
        maxWeight = this.inventoryMaxWeight
        break
      case 3:
        weight = this.stockWeight
        maxWeight = 10000
        break
      case 4:
        weight = this.trunkWeight
        maxWeight = this.state.trunk.trunkMaxWeight
        break
      default:
        break
    }
    const item = this.getItem(fromSlot)
    return item.weight * item.quantity <= maxWeight - weight
  }

  // ================================   SWAP   =================================

  swap = (fromSlot, toSlot) => {
    const item1 = this.getItem(fromSlot)
    const item2 = this.getItem(toSlot)
    const swapParams = [toSlot, fromSlot, item1, item2]

    // Проверки
    const weightResult = this.weightCheck(fromSlot, toSlot)
    const mergeResult = this.swapCheckMergeItems(item1, item2)
    const bagInBagResult = this.swapCheckBagInBag(...swapParams)
    const putOnPutOffResult = this.swapCheckPutOnPutOff(...swapParams)
    const finalResult =
      mergeResult && bagInBagResult && putOnPutOffResult && weightResult
    if (!finalResult) return false

    // Перемещение предметов
    this.state.inventory.forEach(el => {
      if (el.idSlot === fromSlot) el.idSlot = toSlot
      else if (el.idSlot === toSlot) el.idSlot = fromSlot
    })

    // Проверки на необходимость триггеров надеть/снять
    this.swapCheckPutOn(fromSlot, toSlot, item1)
    this.swapCheckPutOff(fromSlot, toSlot, item1)

    if (item1 && item2) {
      window.frontTrigger('inventory.swap', {
        item1: {
          idSlot: this.getInventoryId(fromSlot).id,
          inventoryId: this.getInventoryId(fromSlot).inventoryId
        },
        item2: {
          idSlot: this.getInventoryId(toSlot).id,
          inventoryId: this.getInventoryId(toSlot).inventoryId
        }
      })
    } else {
      window.frontTrigger('inventory.move', {
        from: {
          idSlot: this.getInventoryId(fromSlot).id,
          inventoryId: this.getInventoryId(fromSlot).inventoryId
        },
        to: {
          idSlot: this.getInventoryId(toSlot).id,
          inventoryId: this.getInventoryId(toSlot).inventoryId
        }
      })
    }
  }

  // =============================   ITEM MODAL   ==============================

  onceClick = id => {
    const item = this.getItem(id)
    if (!item) return
    const { right, bottom } = document
      .querySelector(`#slot${id}`)
      .getBoundingClientRect()

    const x = window.innerWidth - right > 360 ? right : right - 460
    const y = window.innerHeight - bottom > 380 ? bottom : bottom - 235

    this.setModal(true, item, x, y)
  }

  doubleClick = id => {
    this.useItem(id)
    this.setModal(false, {}, 0, 0)
  }

  clickHandler = id => {
    if (this.state.clickParams.isClicked) {
      clearTimeout(this.state.clickParams.timer)
      this.state.clickParams.isClicked = false
      return this.doubleClick(id)
    }
    this.state.clickParams.isClicked = true
    this.state.clickParams.timer = setTimeout(() => {
      this.state.clickParams.isClicked = false
      if (this.state.drugId === 0) this.onceClick(id)
    }, 400)
  }

  setModal = (isActive, item, xCord, yCord) => {
    this.state.modal = {
      isActive,
      item,
      xCord,
      yCord,
      sliderValue: 0,
      action: ''
    }
  }

  get useLabel () {
    const { item } = this.state.modal
    const isTakeOff =
      item.equipmentSlot === item.idSlot ||
      (item.isFastSlot && item.idSlot >= 101 && item.idSlot <= 104)

    const isEquip =
      (item.equipmentSlot && item.equipmentSlot !== item.idSlot) ||
      (item.isFastSlot && (item.idSlot <= 101 || item.idSlot >= 104))

    if (isTakeOff) return 'Снять'
    else if (isEquip) return 'Надеть'
    else return 'Использовать'
  }

  toggleModalAction = action => {
    if (this.state.modal.action === action) this.state.modal.action = ''
    else this.state.modal.action = action
  }

  setModalSliderValue = value => (this.state.modal.sliderValue = value)

  modalAction = id => {
    const { action, sliderValue } = this.state.modal
    switch (action) {
      case 'use':
        return this.useItem(id)
      case 'drop':
        return this.deleteItem(id)
      case 'separate':
        return this.separateItem(id, sliderValue)
      default:
        break
    }
  }

  // ===============================   TRADE   =================================

  setTradeInput = value => {
    if (value <= this.state.trade.maxMoney && !this.state.trade.isReady1)
      this.state.trade.input1 = value
  }
  setTradeReady = () => {
    if (!this.state.trade.isFinish)
      this.state.trade.isReady1 = !this.state.trade.isReady1
  }
  setTradeFinish = () => {
    const { isReady1, isReady2 } = this.state.trade
    if (isReady1 && isReady2) this.state.trade.isFinish = true
  }

  // ============================   DRAG'N'DROP   ==============================

  onDragStart = ({ active }) => {
    this.state.drugId = active.id
    clearTimeout(this.state.clickParams.timer)
    this.clickHandler(active.id)
  }

  onDragEnd = ({ active, over }) => {
    this.state.drugId = 0
    if (over) active.id !== over.id && this.swap(active.id, over.id)
  }
}

export default new InventoryStore()
