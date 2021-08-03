import { makeAutoObservable } from 'mobx'
import { IMoney } from '../payment/models'
import { IState, IData } from './models'

type TMethod = 'card' | 'cash';
type TCardId = string | null;

class TattooParlorStore {
  constructor() {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    show: false,
    actives: {
      section: -1,
      item: -1,
      color: 0,
      hand: -1
    },
    money: {
      cash: 0,
      cards: []
    },
    data: {
      businessType: -1,
      businessId: -1,
      itemsList: []
    }
  }
  // отбразить/скрыть интерфейс
  setShow = (status: boolean) => this.state.show = status
  // задать данные для денег
  setMoney = (money: IMoney) => this.state.money = money
  // задать основные данные для магазина/салона
  setData = (data: IData) => {
    if (data.businessId !==
      undefined) this.state.data.businessId = data.businessId
    if (data.businessType !==
      undefined) this.state.data.businessType = data.businessType
    if (data.itemsList !==
      undefined) this.state.data.itemsList = data.itemsList
    this.clearActives()
  }
  // выделение секции
  setActiveSection = (id: number) => {
    this.state.actives.section = id
    this.state.actives.item = -1
    this.state.actives.hand = -1
    this.state.actives.color = 0
    window.frontTrigger('clothes-shop.set.section', this.state.actives.section)
  }
  // выделение предмета
  setActiveItem = (id: number) => {
    this.state.actives.item = id
    window.frontTrigger('clothes-shop.set.item', this.state.actives.item)
  }
  // выделение руки
  setActiveHand = (id: number) => {
    this.state.actives.hand = id
    window.frontTrigger('clothes-shop.set.hand', this.state.actives.hand)
  }
  // выделение цвета
  setActiveColor = (id: number) => {
    this.state.actives.color = id
    window.frontTrigger('clothes-shop.set.color', this.state.actives.color)
  }
  // очистить выделения
  clearActives = () => {
    this.state.actives.section = -1
    this.state.actives.item = -1
    this.state.actives.color = 0
    this.state.actives.hand = -1
  }
  // оплата
  payAction = (method: TMethod, cardId: TCardId) => {
    window.frontTrigger(
      'clothes-shop.buy', {
      cardId,
      method
      // item: this.state.actives
    }
    )
  }
}

const store = new TattooParlorStore()
export { store }
