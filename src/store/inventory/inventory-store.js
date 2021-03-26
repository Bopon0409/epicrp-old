import { makeAutoObservable } from 'mobx'
import { getSlotQuantity, trigger, getMaxWeight } from './supporting-functions'

class InventoryStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    active: false,
    bagType: 2,
    isDrag: false,
    modal: {
      isActive: false,
      item: {},
      xCord: 0,
      yCord: 0
    },
    userIndicators: {
      food: 100,
      water: 100,
      health: 100,
      armor: 0
    },
    inventory: []
  }

  // ================================   MAIN   =================================
  setInventoryActive = active => (this.state.active = active)
  setInventoryData = data => (this.state.inventory = data)

  // Триггеры, отправляемые на сервер
  trigger = trigger

  // ==========================   CULCULATED VALUES   ==========================

  getItem = idSlot => this.state.inventory.find(el => el.idSlot === idSlot)

  // Возвращает 25 - 35 в зависимости от типа сумки
  getSlotQuantity = getSlotQuantity

  getMaxWeight = getMaxWeight

  getTotalWeight = () => {
    const { inventory } = this.state
    let totalWeight = 0
    inventory.forEach(item => {
      if ((item.idSlot >= 1 && item.idSlot <= 25) || item.idSlot === 212)
        totalWeight += item.weight * item.quantity
    })

    return totalWeight.toFixed(1)
  }

  // Возвращает свободный слот, или 1 слот, если все заняты
  getFreeFastSlot = () => {
    for (let i = 101; i < 104; i++) {
      if (!this.getItem(i)) return i
    }
    return 100
  }

  // Возвращает свободный слот, или false, если все заняты
  getFreeInventorySlot = () => {
    for (let i = 1; i < this.getSlotQuantity(this.state.bagType); i++) {
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
    const newInventory = inventory.filter(el => el.idSlot !== item2.idSlot)
    newInventory.forEach(el => {
      if (el.idSlot === item1.idSlot) el.quantity = sum
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
    this.decreaseItem(idSlot)
    this.trigger('use', this.getItem(idSlot).idItem)
  }

  // Надевание экиперовки
  putOnItem = idSlot => {
    const item = this.getItem(idSlot)
    if (item.equipmentSlot) this.swap(idSlot, item.equipmentSlot)
    else if (item.isFastSlot) this.swap(idSlot, this.getFreeFastSlot())
  }

  // Снятие экиперовки
  putOffItem = idSlot => {
    if (this.getFreeInventorySlot()) this.swap(idSlot, this.freeSlotInventory())
  }

  // Разделение предмета
  separateItem = (idSlot, quantity) => {
    this.state.inventory.forEach(el => {
      if (el.idSlot === idSlot) el.quantity -= quantity
    })
    const newItem = this.getItem(idSlot)
    newItem.quantity = quantity
    this.state.inventory.push(newItem)
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
    if (item1.bag && toSlot >= 26 && toSlot <= 35) return false
    if (item2) {
      if (item2.bag && fromSlot >= 26 && fromSlot <= 35) return false
    }
    return true
  }

  // Проверки на возможность надевания/снятия
  swapCheckPutOnPutOff = (toSlot, fromSlot, item1, item2) => {
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
      if (el.idSlot === toSlot) el.idSlot = fromSlot
    })
  }

  // =============================   ITEM MODAL   ==============================

  // isActive, item, xCord, yCord
  setModal = (...props) => (this.state.modal = { ...props })

  // ============================   DRAG'N'DROP   ==============================

  onDragStart = () => (this.state.isDrag = true)

  onDragEnd = ({ active, over }) => {
    this.state.isDrag = false
    if (active.id !== over.id) {
      this.swap(Number(active.id), Number(over.id))
    }
  }
}

export default new InventoryStore()
