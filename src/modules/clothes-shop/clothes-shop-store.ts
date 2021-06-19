import { makeAutoObservable }          from 'mobx'
import { IClothesItem, IData, IState } from './model'
type TMethod = 'card' | 'cash'
type TCardId = string | null


class ClothesShopStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    activeSection: null,
    activeItem: null,
    activeColor: null,
    businessId: 0,
    money: null,
    shopList: null
  }

  setActive = (active: boolean) => this.state.active = active

  setData = (data: IData) => {
    if (data.money !== undefined) this.state.money = data.money
    if (data.shopList !== undefined) this.state.shopList = data.shopList
    if (data.businessId !== undefined) this.state.businessId = data.businessId
  }

  setActiveSection = (sectionNum: number) => {
    this.setActiveItem(null)
    this.state.activeSection = sectionNum
  }

  setActiveItem = (itemNum: number | null) => {
    this.setActiveColor(null)
    this.state.activeItem = itemNum
  }

  get currentSection (): IClothesItem[] | null {
    const { shopList, activeSection } = this.state
    return shopList && activeSection ? shopList[activeSection] : null
  }

  get currentItem (): IClothesItem | null {
    const { shopList, activeSection, activeItem } = this.state
    return shopList && activeSection && activeItem ?
      shopList[activeSection][activeItem] : null
  }

  setActiveColor = (colorId: number | null) => this.state.activeColor = colorId

  payAction = (method: TMethod, cardId: TCardId) => {
  }
}

const store = new ClothesShopStore()
export { store }