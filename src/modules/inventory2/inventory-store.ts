import { makeAutoObservable } from 'mobx'
import {
  IItem, IState, TInventoryId, TPosition, TModalActiveBtn,
  TInventoryPage, TModalUseBtn, IPageProps, TIndicators, THotKeys
}                             from './model'

class InventoryStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    page: null,

    data: [[], [], [], [], [], [], []],

    modal: null,
    dndItem: null,
    adminSearchInput: '',
    adminSearch: '',
    indicators: [0, 0, 0, 0],
    hotKeys: ['1', '2', '3', '4'],
    maxWeight: 10,
    bag: { slots: 0, weight: 0 },

    trunk: { name: '', size: 0, maxWeight: 0 },
    warehouse: { size: 0, maxWeight: 0 },
    closet: { size: 0, maxWeight: 0 },

    trade: {
      name: '', money1: 0, money2: 0, maxMoney: 0,
      btnReady1: false, btnReady2: false, btnFinish: false
    }
  }

  setPage = (page: TInventoryPage) => this.state.page = page

  setTrunk = (data: IPageProps) => this.state.trunk = data

  setWarehouse = (data: IPageProps) => this.state.warehouse = data

  setCloset = (data: IPageProps) => this.state.closet = data

  setIndicators = (data: TIndicators) => this.state.indicators = data

  setHotKeys = (hotKeys: THotKeys) => this.state.hotKeys = hotKeys

  setMaxWeight = (weight: number) => this.state.maxWeight = weight

  //===========================   CLIENT TRIGGERS   ============================

  addItem = (item: IItem, idInventory: TInventoryId) => {
    this.state.data[idInventory].push(item)
  }

  addItems = (data: IItem[], idInventory: TInventoryId) => {
    data.forEach((item) => this.addItem(item, idInventory))
  }

  setItem = (newItem: IItem, idInventory: TInventoryId) => {
    this.state.data[idInventory] = this.state.data[idInventory]
      .map((item) => item.idSlot === newItem.idSlot ? newItem : item)
  }

  removeItem = (itemPosition: TPosition) => {
    const { idSlot, idInventory } = itemPosition
    this.state.data[idInventory] = this.state.data[idInventory]
      .filter((item) => item.idSlot !== idSlot)
  }

  removeItems = (itemPositions: TPosition[]) => {
    itemPositions.forEach((position) => this.removeItem(position))
  }

  moveItem = (positionFrom: TPosition, positionTo: TPosition) => {
    const item = this.getItem(positionFrom)
    const itemCopy = JSON.parse(JSON.stringify(item))
    this.removeItem(positionFrom)
    this.addItem(itemCopy, positionTo.idInventory)
  }

  clearData = (inventoryId: TInventoryId) => this.state.data[inventoryId] = []

  clearAllData = () => this.state.data = [[], [], [], [], [], [], []]

  //===============================   GETTERS   ================================

  getWeight (idInventory: TInventoryId): number {
    return this.state.data[idInventory].reduce((sum, item) => {
      const weight = item.quantity * item.weight
      return sum + (!this.isItemEquipped(item, idInventory) ? weight : 0)
    }, 0)
  }

  get maxWeight () {
    return this.state.maxWeight + this.state.bag.weight
  }

  isItemEquipped = (item: IItem, idInventory: TInventoryId): boolean => {
    const { idSlot } = item
    const isEquip = idSlot >= 201 && idSlot <= 212
    const isFastSlot = idSlot >= 101 && idSlot <= 104
    return (isEquip || isFastSlot) && idInventory === 0
  }

  getItem = (position: TPosition): IItem | null => {
    const { idSlot, idInventory } = position
    return this.state.data[idInventory].find((item) => {
      return item.idSlot === idSlot
    }) || null
  }

  isItemDrag = (position: TPosition): boolean => {
    const { dndItem } = store.state
    const { idSlot, idInventory } = position
    return dndItem?.idSlot === idSlot && dndItem.idInventory === idInventory
  }

  //===============================   CHECKS   =================================

  canEquip = (item: IItem, { idInventory }: TPosition): boolean => {
    return (item.equipment === 1 || item.equipment === 2) && idInventory === 0
  }

  isEquipped = (item: IItem, { idInventory }: TPosition): boolean => {
    return item.idSlot <= 101 && item.idSlot >= 212 && idInventory === 0
  }

  canUse = (item: IItem, { idInventory }: TPosition): boolean => {
    return item.usable && idInventory === 0
  }

  canSeparate = (item: IItem, { idInventory }: TPosition): boolean => {
    return item.quantity > 1 && idInventory < 4
  }

  canRemove = (item: IItem, { idInventory }: TPosition) => {
    return idInventory === 0
  }

  //================================   MODAL   =================================

  modalOpen = (x: number, y: number, position: TPosition) => {
    const item = this.getItem(position)
    if (item) this.state.modal = {
      x, y, activeBtn: null, separateRange: 0, position, item
    }
  }

  modalClose = () => this.state.modal = null

  get modalUseBtn (): TModalUseBtn | null {
    if (!this.state.modal) return null
    const { item, position } = this.state.modal

    if (this.isEquipped(item, position)) return 'take-off'
    else if (this.canEquip(item, position)) return 'equip'
    else if (this.canUse(item, position)) return 'use'
    else return null
  }

  modalSetActiveBtn = (btn: TModalActiveBtn) => {
    if (this.state.modal === null) return
    this.state.modal.activeBtn = this.state.modal.activeBtn !== btn ? btn : null
  }

  modalSetRange = (range: number) => {
    if (this.state.modal && this.state.modal.item.quantity >= range) {
      this.state.modal.separateRange = range
    }
  }

  //=============================   ITEM ACTIONS   =============================

  itemUseReq = (position: TPosition, useAction: 'use' | 'equip') => {
    window.frontTrigger(`inventory.${useAction}`, position)
  }

  itemSeparateReq = (position: TPosition, value: number) => {
    window.frontTrigger(`inventory.separate`, position, value)
  }

  itemRemoveReq = (position: TPosition, value?: number) => {
    window.frontTrigger(`inventory.remove`, position, value)
  }

  itemMoveReq = (positionFrom: TPosition, positionTo: TPosition) => {
    window.frontTrigger(`inventory.move`, positionFrom, positionTo)
  }

  //================================   ADMIN   =================================

  setAdminSearchValue = (event: any) => {
    const { value } = event.target
    if (value < 30) this.state.adminSearchInput = value.toLowerCase()
  }

  setAdminSearch = (isSearch: boolean) => {
    this.state.adminSearch = isSearch ? this.state.adminSearchInput : ''
  }

  adminSearchData = (): IItem[] => {
    const { adminSearch } = this.state
    return adminSearch.length ? this.state.data[6].filter((item) => {
      return item.name.toLowerCase().includes(adminSearch)
    }) : this.state.data[6]
  }

  //================================   TRADE   =================================

  setTradeMaxMoney = (money: number) => this.state.trade.maxMoney = money

  setButtonReady1 = (value: boolean) => this.state.trade.btnReady1 = value
  setButtonReady2 = (value: boolean) => this.state.trade.btnReady2 = value

  setTradeMoney1 = (event: any) => {
    const value = Number(event.target.value)
    if (!isNaN(value) && value <= this.state.trade.maxMoney)
      this.state.trade.money1 = value
  }

  setTradeMoney2 = (value: number) => this.state.trade.money2 = value

  setButtonFinish = (value: boolean) => {
    const { btnReady1, btnReady2 } = this.state.trade
    if (btnReady1 && btnReady2 && value) this.state.trade.btnFinish = true
    else if (!value) this.state.trade.btnFinish = false
  }

}

const store = new InventoryStore()
export { store }