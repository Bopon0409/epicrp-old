import { makeAutoObservable } from 'mobx'

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
    inventory: []
  }

  // ================================   MAIN   =================================
  setInventoryActive = (active, inventoryId = 0) => {
    this.state.active = active
    this.state.mode = this.state.active ? inventoryId : 0
  }

  setInventoryData = data => {
    let inventoryId = 0
    data = data.filter(el => {
      if (el.inventoryId !== undefined) inventoryId = el.inventoryId
      return el.inventoryId === undefined
    })
    this.cleanInventory(inventoryId)
    this.convertData(data, inventoryId)?.forEach(el =>
      this.state.inventory.push(el)
    )
  }

  // Конвертация предметов в формат фронта
  convertData = (data, inventoryId = 0) => {
    return data.map(el => {
      switch (inventoryId) {
        // Инвентарь
        case 0:
          return el
        // Трейд мой
        case 1:
          el.idSlot += 300
          return el
        // Трейд чужой
        case 2:
          el.idSlot += 350
          return el
        // Склад
        case 3:
          el.idSlot += 400
          return el
        // Багажник
        case 4:
          el.idSlot += 600
          return el
        default:
          return el
      }
    })
  }

  // Очистка предметов одного из инвентарей
  cleanInventory = inventoryId => {
    let min, max
    switch (inventoryId) {
      // Инвентарь
      case 0:
        min = 1
        max = 212
        break
      // Трейд мой
      case 1:
        min = 301
        max = 349
        break
      // Трейд чужой
      case 2:
        min = 350
        max = 400
        break
      // Склад
      case 3:
        min = 401
        max = 600
        break
      // Багажник
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

  // Триггеры, отправляемые на сервер

  trigger = (triggerName, id) => {
    if (window.mp) {
      switch (triggerName) {
        case 'putOn':
          return window.clientTrigger('inventory.equip', id)
        case 'putOff':
          return window.clientTrigger('inventory.take', id)
        case 'use':
          return window.clientTrigger('inventory.use', id)
        default:
          break
      }
    }
  }

  // ==========================   CULCULATED VALUES   ==========================

  getArmor = () =>
    this.state.inventory.find(el => el.armor && el.idSlot === 206)?.armor || 0

  getBagType = () =>
    this.state.inventory.find(el => el.bag && el.idSlot === 212)?.bag || 0

  getBagWeight = () => {
    let weight = 0.2
    this.state.inventory.forEach(el => {
      if (el.idSlot >= 51 && el.idSlot <= 60) weight += el.weight * el.quantity
    })
    return weight
  }

  getInventoryWeight = () => {
    let totalWeight = 0
    this.state.inventory.forEach(item => {
      if ((item.idSlot >= 1 && item.idSlot <= 25) || item.idSlot === 212)
        if (item.bag) {
          totalWeight += this.getBagWeight()
        } else totalWeight += item.weight * item.quantity
    })

    return totalWeight.toFixed(1)
  }

  getInventoryMaxWeight = () => {
    switch (this.getBagType()) {
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

  getItem = idSlot => this.state.inventory.find(el => el.idSlot === idSlot)

  // Возвращает свободный слот, или 1 слот, если все заняты
  getFreeFastSlot = () => {
    for (let i = 101; i < 104; i++) {
      if (!this.getItem(i)) return i
    }
    return 100
  }

  // Возвращает свободный слот, или false, если все заняты
  getFreeInventorySlot = () => {
    for (let i = 1; i < this.getSlotQuantity(this.getBagType()); i++) {
      if (!this.getItem(i)) return i
    }
    return false
  }

  // ============================   ITEMS ACTIONS   ============================

  deleteItem = idSlot => {
    this.state.inventory = this.state.inventory.filter(
      el => el.idSlot !== idSlot
    )
  }

  // Уменьшение количества предметов в стаке
  decreaseItem = idSlot => {
    const { quantity } = this.getItem(idSlot)
    if (quantity === 1) this.deleteItem(idSlot)
    else {
      this.state.inventory.forEach(el => el.idSlot === idSlot && el.quantity--)
    }
  }

  // Слияние (стак) предметов
  mergeItems = (item1, item2) => {
    const { inventory } = this.state
    const sum = item1.quantity + item2.quantity
    const newInventory = inventory.filter(el => el.idSlot !== item1.idSlot)
    newInventory.forEach(el => {
      if (el.idSlot === item2.idSlot) el.quantity = sum
    })
    this.state.inventory = newInventory
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
  }

  // Надевание экиперовки
  putOnItem = idSlot => {
    const item = this.getItem(idSlot)
    if (item.equipmentSlot) this.swap(idSlot, item.equipmentSlot)
    else if (item.isFastSlot) this.swap(idSlot, this.getFreeFastSlot())
  }

  // Снятие экиперовки
  putOffItem = idSlot => {
    const freeSlot = this.getFreeInventorySlot()
    if (freeSlot) this.swap(idSlot, freeSlot)
  }

  // Разделение предмета
  separateItem = (idSlot, quantity) => {
    const freeSlot = this.getFreeInventorySlot()
    if (freeSlot) {
      this.state.inventory.forEach(el => {
        if (el.idSlot === idSlot) el.quantity -= quantity
      })
      const newItem = JSON.parse(JSON.stringify(this.getItem(idSlot)))
      newItem.quantity = quantity
      newItem.idSlot = freeSlot
      this.state.inventory.push(newItem)
    }
  }

  // ============================   SWAP CHECKS   ==============================

  // Проверка на надевание (для отправки на сервер)
  swapCheckPutOn = (toSlot, fromSlot, item1, item2) => {
    if (toSlot >= 101 && fromSlot < 101) this.trigger('putOn', item1.idItem)
    if (item2) fromSlot >= 101 && this.trigger('putOn', item2.idItem)
  }

  // Проверка на снятие (для отправки на сервер)
  swapCheckPutOff = (toSlot, fromSlot, item1, item2) => {
    if (fromSlot >= 101 && toSlot < 100) this.trigger('putOff', item1.idItem)
    if (item2) toSlot >= 101 && this.trigger('putOff', item2.idItem)
  }

  // Проверка на стак предметов
  swapCheckMergeItems = (item1, item2) => {
    if (item2) {
      if (item1.idSlot !== item2.idSlot && item1.idItem === item2.idItem) {
        this.mergeItems(item1, item2)
        return false
      }
    }
    return true
  }

  // Проверка на перемещение сумки в сумку
  swapCheckBagInBag = (toSlot, fromSlot, item1, item2) => {
    if (item1.bag && toSlot >= 51 && toSlot <= 60) return false
    if (item2) {
      if (item2.bag && fromSlot >= 26 && fromSlot <= 35) return false
    }
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

  // ================================   SWAP   =================================

  swap = (fromSlot, toSlot) => {
    const item1 = this.getItem(fromSlot)
    const item2 = this.getItem(toSlot)
    const swapParams = [toSlot, fromSlot, item1, item2]

    // Проверки
    const mergeResult = this.swapCheckMergeItems(item1, item2)
    const bagInBagResult = this.swapCheckBagInBag(...swapParams)
    const putOnPutOffResult = this.swapCheckPutOnPutOff(...swapParams)
    const finalResult = mergeResult && bagInBagResult && putOnPutOffResult
    if (!finalResult) return false

    // Проверки на необходимость триггеров
    this.swapCheckPutOn(...swapParams)
    this.swapCheckPutOff(...swapParams)

    // Перемещение предметов
    this.state.inventory.forEach(el => {
      if (el.idSlot === fromSlot) el.idSlot = toSlot
      else if (el.idSlot === toSlot) el.idSlot = fromSlot
    })
  }

  // =============================   ITEM MODAL   ==============================

  // isActive, item, xCord, yCord
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

  // ============================   DRAG'N'DROP   ==============================

  clickCounter
  isClicked = false
  timer

  click = () => {
    if (this.isClicked) {
      clearTimeout(this.timer)
      this.isClicked = false
      return console.log('dbl click')
    }
    this.isClicked = true
    this.timer = setTimeout(() => {
      this.isClicked = false
      if (this.state.drugId === 0) console.log('click')
    }, 200)
  }

  onDragStart = ({ active }) => {
    this.state.drugId = active.id
    this.click()
  }

  onDragEnd = ({ active, over }) => {
    this.state.drugId = 0
    if (over) {
      if (active.id !== over.id) this.swap(Number(active.id), Number(over.id))
    }
  }
}

export default new InventoryStore()
