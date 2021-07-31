import { makeAutoObservable } from 'mobx'
import {
  IItem, IState, TInventoryId, IItemPosition
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

  //=============================   ITEM ACTIONS   =============================

  addItem = (item: IItem, idInventory: TInventoryId) => {
    this.state.data[idInventory].push(item)
  }

  setItem = (newItem: IItem, idInventory: TInventoryId) => {
    this.state.data[idInventory] = this.state.data[idInventory]
      .map((item) => item.idSlot === newItem.idSlot ? newItem : item)
  }

  removeItem = (itemPosition: IItemPosition) => {
    const { idSlot, idInventory } = itemPosition
    this.state.data[idInventory] = this.state.data[idInventory]
      .filter((item) => item.idSlot !== idSlot)
  }
}

const store = new InventoryStore()
export { store }