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

  updateView = () => {
    const { currentGunId, currentModId, menuItem } = this.state
    window.frontTrigger('gun-shop.view', menuItem, currentGunId, currentModId)
  }

  setMenuItem = (value: number) => {
    this.state.menuItem = value
    this.state.cartMods = []
    window.frontTrigger('gun-shop.category', value)
    this.setCurrentGunId(0)
  }

  setCurrentGunId = (value: number) => {
    this.state.currentGunId = value
    this.state.cartMods = []
    window.frontTrigger('gun-shop.gun', value)
    this.setCurrentModId(null)
  }

  setCurrentModId = (value: number | null) => {
    this.state.currentModId = this.state.currentModId === value ? null : value
    window.frontTrigger('gun-shop.mod', this.state.currentModId)
  }

  get sliderStatus (): [boolean, boolean] {
    const { currentGunId, categories, menuItem } = this.state
    const category = categories.find(cat => cat.id === menuItem)
    if (currentGunId === null || category === undefined || category === null)
      return [false, false]
    return [currentGunId > 0, currentGunId < category.guns.length - 1]
  }

  sliderIncrement = () => {
    const { categories, menuItem } = this.state
    const category = categories.find(cat => cat.id === menuItem)
    if (this.state.currentGunId === null || !category) return

    if (this.state.currentGunId < category.guns.length - 1)
      this.setCurrentGunId(this.state.currentGunId + 1)
  }

  sliderDecrement = () => {
    const { categories, menuItem } = this.state
    const category = categories.find(cat => cat.id === menuItem)
    if (this.state.currentGunId === null || !category) return

    if (this.state.currentGunId > 0)
      this.setCurrentGunId(this.state.currentGunId - 1)
  }

  get currentGun (): IGun | null {
    const { currentGunId, menuItem, categories } = this.state
    if (currentGunId === null) return null
    return categories.find(cat => cat.id === menuItem)
      ?.guns[currentGunId] || null
  }

  cartAddGun = () => {
    const { currentGun, state: { cartMods } } = this
    if (currentGun === null) return
    const { id, price, name, props } = currentGun
    this.state.cart.push({ id, price, name, props, modifications: cartMods })
    this.state.cartMods = []
    this.setCurrentModId(null)
  }

  cartAddMod = () => {
    if (this.currentGun === null || this.state.currentModId === null) return
    const modification = this.currentGun.modifications
      .find((mod) => mod.id === this.state.currentModId)
    if (modification) this.state.cartMods.push(modification)
  }

  cartRemoveGun = (gunId: number) => {
    this.state.cart = this.state.cart.filter((gun) => gun.id !== gunId)
  }

  cartRemoveMod = (gunId: number, modId: number) => {
    const gun = this.state.cart.find((gun) => gun.id === gunId)
    if (!gun) return
    gun.modifications = gun.modifications
      .filter((mod) => mod.id !== modId)
  }

  removeCurrentCartMod = () => {
    if (this.currentGun === null || this.state.currentModId === null) return
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
    window.frontTrigger('gun-shop.buy', { method, cardId, cart, sum })
    this.state.cart = []
  }

  setModal = (active: boolean) => this.state.modalActive = active
}

const store = new GunShopStore()
export { store }