import { makeAutoObservable }  from 'mobx'
import { IData, IGun, IState } from './model'
import { TMethod, TCardId }    from '../payment/models'

class GunShopStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    modalActive: false,
    businessNum: 0,
    money: { cash: 0, cards: [] },
    categories: [],
    menuItem: null,
    currentGunId: null,
    currentModId: null,
    cart: [],
    cartMods: []
  }

  setActive = (active: boolean) => this.state.active = active

  setData = (data: IData) => {
    if (data.businessNum !== undefined)
      this.state.businessNum = data.businessNum
    if (data.categories !== undefined) this.state.categories = data.categories
    if (data.money !== undefined) this.state.money = data.money
  }

  setMenuItem = (value: number) => {
    this.state.menuItem = value
    // @ts-ignore
    window.frontTrigger('gun-shop.view.category', value)
    this.state.currentGunId = 0
    this.state.currentModId = null
  }

  setCurrentGunId = (value: number) => {
    this.state.currentGunId = value
    // @ts-ignore
    window.frontTrigger('gun-shop.view.gun', this.currentGun?.id)
  }

  setCurrentModId = (value: number | null) => {
    this.state.currentModId = value
    // @ts-ignore
    window.frontTrigger('gun-shop.view.modification', value)
  }

  sliderIncrement = () => {
    const { categories, menuItem } = this.state
    const category = categories.find(cat => cat.id === menuItem)
    if (this.state.currentGunId === null || !category) return

    if (this.state.currentGunId < category.guns.length - 1)
      this.state.currentGunId += 1
  }

  sliderDecrement = () => {
    const { categories, menuItem } = this.state
    const category = categories.find(cat => cat.id === menuItem)
    if (this.state.currentGunId === null || !category) return

    if (this.state.currentGunId > 0) this.state.currentGunId -= 1
  }

  get currentGun (): IGun | null {
    const { currentGunId, menuItem, categories } = this.state
    if (!currentGunId) return null
    return categories.find(cat => cat.id === menuItem)
      ?.guns[currentGunId] || null
  }

  cartAddGun = () => {
    const { currentGun, state: { cartMods } } = this
    if (!currentGun) return
    const { id, price } = currentGun
    this.state.cart.push({ id, price, modifications: cartMods })
    this.state.cartMods = []
  }

  cartAddMod = () => {
    if (!this.currentGun || !this.state.currentModId) return
    const modification = this.currentGun.modifications
      .find((mod) => mod.id === this.state.currentModId)
    if (modification) this.state.cartMods.push(modification)
  }

  cartRemoveGun = (gunId: number) => {
    this.state.cart = this.state.cart.filter((gun) => gun.id !== gunId)
  }

  cartRemoveMod = () => {
    if (!this.currentGun || !this.state.currentModId) return
    this.state.cartMods = this.state.cartMods
      .filter((mod) => mod.id !== this.state.currentModId)
  }

  isModInCart = (modId: number): boolean => {
    return !!this.state.cartMods.find(mod => mod.id === modId)
  }

  get currentPrice (): number {
    return this.state.cart.reduce((sum, item) => {
      return sum + item.price + item.modifications
        .reduce((sum, mod) => sum + mod.price, 0)
    }, 0)
  }

  payAction = (method: TMethod, cardId: TCardId) => {
    const { state: { cart }, currentPrice: sum } = this
    // @ts-ignore
    window.frontTrigger('gun-shop.buy', { method, cardId, cart, sum })
  }
}

const store = new GunShopStore()
export { store }