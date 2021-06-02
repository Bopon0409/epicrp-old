import { makeAutoObservable }   from 'mobx'
import { IData, IItem, IState } from './model'

class ShopStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    businessId: 0,
    money: { cash: 0, cards: [] },
    sectionList: [],
    shoppingCart: [],
    section: 0
  }

  setActive = (active: boolean) => this.state.active = active

  setData = (data: IData) => {
    if (data.money) this.state.money = data.money
    if (data.businessId) this.state.businessId = data.businessId
    if (data.sectionList) this.state.sectionList = data.sectionList
  }

  setSection = (sectionId: number) => this.state.section = sectionId

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