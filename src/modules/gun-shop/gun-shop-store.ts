import { makeAutoObservable }  from 'mobx'
import { IData, IGun, IState } from './model'

class GunShopStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    businessNum: 0,
    money: { cash: 0, cards: [] },
    categories: [],
    menuItem: null,
    currentGunId: 0,
    currentModId: 0
  }

  setActive = (active: boolean) => this.state.active = active

  setData = (data: IData) => {
    if (data.businessNum !== undefined)
      this.state.businessNum = data.businessNum
    if (data.categories !== undefined) this.state.categories = data.categories
    if (data.money !== undefined) this.state.money = data.money
  }

  setMenuItem = (value: number) => this.state.menuItem = value

  get currentGun (): IGun | null {
    const { currentGunId, menuItem, categories } = this.state
    return categories.find(cat => cat.id === menuItem)?.guns
      .find(gun => gun.id === currentGunId) || null
  }
}

const store = new GunShopStore()
export { store }