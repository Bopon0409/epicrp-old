import { makeAutoObservable }   from 'mobx'
import { IClothesItem, IState } from './model'

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
}

const store = new ClothesShopStore()
export { store }