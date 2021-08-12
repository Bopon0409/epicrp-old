import { makeAutoObservable } from 'mobx'
import {
  IItem, IState, TInventoryId, TPosition, TModalActiveBtn,
  TInventoryPage, TModalUseBtn, IPageProps, TIndicators, THotKeys, TBag
}                             from './model'
import React                  from 'react'

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
    bag: null,

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

  setBag = (bag: TBag | null) => this.state.bag = bag

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
    const itemCopy = JSON.parse(JSON.stringify(this.getItem(positionFrom)))
    itemCopy.idSlot = positionTo.idSlot
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
    const { maxWeight, bag } = this.state
    return bag ? bag.weight + maxWeight : maxWeight
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
    if (store.state.dndItem) {
      const { idSlot, idInventory } = store.state.dndItem.position
      return position.idSlot === idSlot && position.idInventory === idInventory
    } else return false
  }

  //===============================   CHECKS   =================================

  canEquip = (item: IItem, { idInventory }: TPosition): boolean => {
    return item.equipment && idInventory === 0
  }

  isEquipped = (item: IItem, { idInventory }: TPosition): boolean => {
    return item.idSlot >= 201 && item.idSlot <= 212 && idInventory === 0
  }

  canUse = (item: IItem, { idInventory }: TPosition): boolean => {
    return item.usable && idInventory === 0
  }

  canSeparate = (item: IItem, { idInventory }: TPosition): boolean => {
    return item.quantity > 1 && idInventory === 0
  }

  canRemove = (item: IItem, { idInventory }: TPosition) => {
    return idInventory === 0
  }

  //================================   MODAL   =================================

  clickAroundModal = (event: React.MouseEvent) => {
    if (this.state.modal) {
      console.log(event)
    }
  }

  clickItem = (event: React.MouseEvent, position: TPosition) => {
    setTimeout(() => {
      if (!store.state.dndItem) this.modalOpen(position, event)
    }, 300)
  }

  modalOpen = (position: TPosition, { clientX, clientY }: React.MouseEvent) => {
    const item = this.getItem(position)

    if (item) {
      const x = window.innerWidth - clientX > 360 ? clientX : clientX - 460
      const y = window.innerHeight - clientY > 380 ? clientY : clientY - 235

      this.state.modal = { x, y, activeBtn: null, range: 0, position, item }
    }
  }

  modalClose = () => this.state.modal = null

  get modalUseBtn (): TModalUseBtn | null {
    if (!this.state.modal) return null
    const { item, position } = this.state.modal

    if (this.isEquipped(item, position)) return 'Снять'
    else if (this.canEquip(item, position)) return 'Надеть'
    else if (this.canUse(item, position)) return 'Использовать'
    else return null
  }

  get separateActive (): boolean {
    const { modal } = this.state
    if (modal) {
      const { activeBtn, item: { quantity } } = modal
      return activeBtn === 'separate' ||
        (activeBtn === 'remove' && quantity > 1)
    } else return false
  }

  modalSetActiveBtn = (btn: TModalActiveBtn) => {
    if (this.state.modal === null) return
    this.state.modal.activeBtn = this.state.modal.activeBtn !== btn ? btn : null
  }

  modalSetRange = (range: number | string) => {
    const { modal } = this.state
    range = Number(range)
    if (modal && !isNaN(range) && modal.item.quantity >= range)
      modal.range = range
  }

  modalSubmit = () => {
    const { modal } = this.state
    if (modal) {
      const range = modal.item.quantity === 1 ? 1 : modal.range
      switch (modal.activeBtn) {
        case 'use':
          this.itemUseReq(modal.position)
          break
        case 'separate':
          this.itemSeparateReq(modal.position, range)
          break
        case 'remove':
          this.itemRemoveReq(modal.position, range)
          break
      }
    }
    this.modalClose()
  }

  //=============================   ITEM ACTIONS   =============================

  itemUseReq = (position: TPosition) => {
    window.frontTrigger('inventory.use', position)
  }

  itemSeparateReq = (position: TPosition, value: number) => {
    window.frontTrigger('inventory.separate', position, value)
  }

  itemRemoveReq = (position: TPosition, value?: number) => {
    window.frontTrigger('inventory.remove', position, value)
  }

  itemMoveReq = (positionFrom: TPosition, positionTo: TPosition) => {
    window.frontTrigger('inventory.move', positionFrom, positionTo)
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

  //=================================   DND   ==================================

  dragMove = (props: any) => {
    if (store.state.dndItem) return
    const position = JSON.parse(props.active.id)
    const item = this.getItem(position)
    if (item) this.state.dndItem = { position, idImg: item.idImg }
  }

  dragEnd = (props: any) => {
    this.state.dndItem = null
    if (!props.over) return

    const from = JSON.parse(props.active.id)
    const to = JSON.parse(props.over.id)
    if (props.active.id === props.over.id) return

    this.itemMoveReq(from, to)
  }
}

const store = new InventoryStore()
export { store }