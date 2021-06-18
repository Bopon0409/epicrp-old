import { makeAutoObservable }             from 'mobx'
import { IData, IItem, IState, TPayment } from './models'

class ShopStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    businessId: 0,
    money: { cash: 0, cards: [] },
    sectionCurrent: null,
    sectionList: [],
    cartMode: false,
    shoppingCart: [],
    payment: 'cash'
  }

  get cartSum (): { sum: number, quantity: number } {
    const sumReducer = (sum: number, { price, quantity }: IItem): number =>
      sum + (price * quantity)

    const quantityReducer = (sum: number, { quantity }: IItem): number =>
      sum + quantity

    if (this.state.shoppingCart.length) {
      return {
        sum: this.state.shoppingCart.reduce(sumReducer, 0),
        quantity: this.state.shoppingCart.reduce(quantityReducer, 0)
      }
    } else return { sum: 0, quantity: 0 }
  }

  get currentSectionItems (): IItem[] {
    const { sectionCurrent } = this.state
    const section = this.state.sectionList
      .find((section) => section.sectionId === sectionCurrent)
    return section ? section.items : []
  }

  getItem = (itemId: number): IItem | null => {
    let result: IItem | null = null
    this.state.sectionList.forEach((section) => {
      section.items.forEach((item) => {
        if (item.itemId === itemId) result = item
      })
    })
    return result
  }

  setActive = (active: boolean) => {
    this.state.active = active
    if (!active) {
      this.state.businessId = 0
      this.state.money = { cash: 0, cards: [] }
      this.state.sectionCurrent = null
      this.state.sectionList = []
      this.state.shoppingCart = []
    }
  }

  menuInit = () => {
    if (this.state.sectionList.length)
      this.state.sectionCurrent = this.state.sectionList[0].sectionId
  }

  setPayment = (value: TPayment) => this.state.payment = value

  setCartMode = () => {
    const active = !this.state.cartMode
    if (active) {
      this.state.cartMode = true
      this.state.sectionCurrent = null
    } else {
      this.state.cartMode = false
      this.menuInit()
    }
  }

  get funds (): number {
    const { cash, cards } = this.state.money
    switch (this.state.payment) {
      case 'cash':
        return cash
      case 'card1':
        return cards[0].balance
      case 'card2':
        return cards[1].balance
      default:
        return 0
    }
  }

  setData = (data: IData) => {
    if (data.money) this.state.money = data.money
    if (data.businessId) this.state.businessId = data.businessId
    if (data.sectionList) {
      this.state.sectionList = data.sectionList
      this.menuInit()
    }
  }

  setSection = (sectionId: number) => {
    if (!this.state.cartMode) this.state.sectionCurrent = sectionId
  }

  cartAddItem = (item: IItem) => {
    const cartItem = this.state.shoppingCart
      .find(({ itemId }: IItem) => item.itemId === itemId)
    const shopItem = this.getItem(item.itemId)
    const { funds, cartSum: { sum } } = this

    if (cartItem && shopItem) {
      const moneyCheck = (sum + shopItem.price) <= funds
      if (cartItem.quantity < shopItem.quantity && moneyCheck)
        cartItem.quantity += 1
    } else {
      if (sum < funds) {
        const itemCopy = JSON.parse(JSON.stringify(item))
        itemCopy.quantity = 1
        this.state.shoppingCart.push(itemCopy)
      }
    }
  }

  cartRemoveItem = (itemId: number) => {
    const { shoppingCart } = this.state
    const cartItem: IItem | undefined = shoppingCart
      .find((item: IItem) => item.itemId === itemId)
    if (cartItem) {
      if (cartItem.quantity > 1) cartItem.quantity -= 1
      else {
        this.state.shoppingCart = shoppingCart
          .filter((item: IItem) => item.itemId !== itemId)
      }
    }
  }

  buy = () => {
    const data = this.state.shoppingCart
      .map(({ itemId, quantity }) => ({ itemId, quantity }))
    // @ts-ignore
    window.frontTrigger('shop.buy', JSON.stringify(data))
  }
}

const store = new ShopStore()

export { store }