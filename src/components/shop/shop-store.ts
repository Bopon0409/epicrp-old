import { makeAutoObservable }   from 'mobx'
import { IData, IItem, IState } from './models'

class ShopStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    businessId: 0,
    money: { cash: 0, cards: [] },
    sectionCurrent: 0,
    sectionList: [],
    cartMode: false,
    shoppingCart: []
  }

  setActive = (active: boolean) => this.state.active = active

  menuInit = () => {
    if (this.state.sectionList.length)
      this.state.sectionCurrent = this.state.sectionList[0].sectionId
  }

  setCartMode = (active: boolean) => {
    if (active) {
      this.state.cartMode = true
      this.state.sectionCurrent = null
    } else {
      this.state.cartMode = false
      this.menuInit()
    }
  }

  setData = (data: IData) => {
    if (data.money) this.state.money = data.money
    if (data.businessId) this.state.businessId = data.businessId
    if (data.sectionList) this.state.sectionList = data.sectionList
  }

  setSection = (sectionId: number) => this.state.sectionCurrent = sectionId

  cartAdd = (item: IItem) => this.state.shoppingCart.push(item)

  cartClear = () => this.state.shoppingCart = []

  cartRemove = (itemId: number) => {
    this.state.shoppingCart = this.state.shoppingCart.filter(
      (item: IItem) => item.itemId !== itemId
    )
  }

}

const store = new ShopStore()

export { store }