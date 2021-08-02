import { makeAutoObservable } from 'mobx'
import {
  IItem, IState, TInventoryId, TPosition,
  TModalActiveBtn, TInventoryPage, TModalUseBtn
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
    adminSearch: '',
    indicators: [0, 0, 0],

    trunk: {
      name: '',
      size: 0,
      maxWeight: 0
    },

    trade: {
      name: '',
      money1: 0,
      money2: 0,
      maxMoney: 0,
      btnReady1: false,
      btnReady2: false,
      btnFinish: false
    }
  }

  setPage = (page: TInventoryPage) => this.state.page = page

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

  moveItem = (positionFrom: TPosition, positionTo: TPosition) => {
    const item = this.getItem(positionFrom)
    const itemCopy = JSON.parse(JSON.stringify(item))
    this.removeItem(positionFrom)
    this.addItem(itemCopy, positionTo.idInventory)
  }

  clearData = (inventoryId: TInventoryId) => {
    this.state.data[inventoryId] = []
  }

  clearAllData = () => {
    this.state.data = [[], [], [], [], [], [], []]
  }

  //===============================   GETTERS   ================================

  isItemEquipped = (item: IItem, idInventory: TInventoryId): boolean => {
    const { idSlot, equipmentSlot, fastSlot } = item
    const isEquip = equipmentSlot && idSlot >= 201 && idSlot <= 212
    const isFastSlot = fastSlot && idSlot >= 101 && idSlot <= 104
    return (isEquip || isFastSlot) && idInventory === 0
  }

  getWeight (idInventory: TInventoryId): number {
    return this.state.data[idInventory].reduce((sum, item) => {
      const weight = item.quantity * item.weight
      return sum + (!this.isItemEquipped(item, idInventory) ? weight : 0)
    }, 0)
  }

  getItem = (position: TPosition): IItem | null => {
    const { idSlot, idInventory } = position
    return this.state.data[idInventory].find((item) => {
      return item.idSlot === idSlot
    }) || null
  }

  //================================   MODAL   =================================

  modalOpen = (x: number, y: number, position: TPosition) => {
    this.state.modal = { x, y, activeBtn: null, separateRange: 0, position }
  }

  modalClose = () => this.state.modal = null

  getUseButton = (position: TPosition): TModalUseBtn | undefined => {
    const item = this.getItem(position)
    if (item && position.idInventory === 0) {
      if (this.isItemEquipped(item, position.idInventory)) return 'take-off'
      if (item.fastSlot || item.equipmentSlot) return 'equip'
      if (item.usable) return 'use'
    }
  }

  isSeparateButton = (position: TPosition): boolean => {
    const { idInventory } = position
    const item = this.getItem(position)
    if (item) {
      const check1 = idInventory !== 1 && idInventory !== 2 && idInventory !== 6
      const check2 = item.quantity > 0
      return check1 && check2
    } else return false
  }

  isRemoveButton = (position: TPosition): boolean => {
    const { idInventory } = position
    return idInventory !== 1 && idInventory !== 2 && idInventory !== 6
  }

  modalSetActiveBtn = (btn: TModalActiveBtn) => {
    if (this.state.modal === null) return
    this.state.modal.activeBtn = this.state.modal.activeBtn !== btn ? btn : null
  }

  modalSetSeparateRange = (range: number) => {
    if (this.state.modal) this.state.modal.separateRange = range
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

  //=============================   ITEM ACTIONS   =============================

  setAdminSearch = (event: any) => {
    this.state.adminSearch = event.target.value.toLowerCase()
  }

  adminSearchData = (): IItem[] => {
    const { adminSearch } = this.state
    return this.state.data[6].filter((item) => {
      return item.name.toLowerCase().includes(adminSearch)
    })
  }
}

const store = new InventoryStore()
export { store }