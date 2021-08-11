import inventory0 from './player-inventory-data.json'
import {
  IItem, IPageProps, TInventoryPage, THotKeys,
  TIndicators, TInventoryId, TPosition, TBag
}                 from './doc'

// Изменение страницы инвентаря
const setPage = (page: TInventoryPage | null) => {
  window.strTrigger('inventory.page', page)
}

// Добавление предмета
const addItem = (item: IItem, idInventory: TInventoryId) => {
  window.trigger('inventory.item.add', item, idInventory)
}

// Добавление массива предметов
const addManyItems = (items: IItem[], idInventory: TInventoryId) => {
  window.trigger('inventory.item.add-many', items, idInventory)
}

// Изменение предмета
const setItem = (item: IItem, idInventory: TInventoryId) => {
  window.trigger('inventory.item.set', item, idInventory)
}

// Удаление предмета
const removeItem = (itemPosition: TPosition) => {
  window.trigger('inventory.item.remove', itemPosition)
}

// Удаление предметов
const removeItems = (itemPositions: TPosition[]) => {
  window.trigger('inventory.item.remove-many', itemPositions)
}

// Перемещение предмета
const moveItem = (positionFrom: TPosition, positionTo: TPosition) => {
  window.trigger('inventory.item.move', positionFrom, positionTo)
}

// Загрузка данных багажника
const setTrunk = (trunk: IPageProps) => {
  window.trigger('inventory.trunk', trunk)
}

// Загрузка индикаторов
const setIndicators = (data: TIndicators) => {
  window.trigger('inventory.indicators', data)
}

// Загрузка горячих клавиш
const setHotKeys = (hotKeys: THotKeys) => {
  window.trigger('inventory.hotkeys', hotKeys)
}

// Загрузка максимального веса инвентаря (опционально для админов)
const setMaxWeight = (weight: number) => {
  window.trigger('inventory.max-weight', weight)
}

// Очистка инвентаря
const clear = (inventoryId: TInventoryId) => {
  window.trigger('inventory.clear', inventoryId)
}

// Очистка всех инвентарей
const clearAll = () => {
  window.trigger('inventory.clear-all')
}

// Трейд. Кнопка готов (второго игрока)
const setTradeReady2 = (value: boolean) => {
  window.trigger('inventory.trade.ready2', value)
}

// Трейд. Поле денег (второго игрока)
const setTradeMoney2 = (value: number) => {
  window.trigger('inventory.trade.money2', value)
}

// Трейд. Количество денег игрока (максимум для ввода)
const setTradeMaxMoney = (money: number) => {
  window.trigger('inventory.trade.max-money', money)
}

// Установка значения сумки
const setBag = (bag: TBag | null) => {
  window.trigger('inventory.bag', bag)
}

// @ts-ignore
const loadInventory = (id: number) => addManyItems(inventory0, 0)

window.test.inventory2 = {
  setPage, addItem, addManyItems, setItem, removeItem, moveItem, setTrunk,
  setIndicators, setHotKeys, setMaxWeight, clear, clearAll, setBag,
  setTradeReady2, setTradeMoney2, setTradeMaxMoney, removeItems, loadInventory
}