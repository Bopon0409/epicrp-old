import { makeAutoObservable } from 'mobx'
import { IMoney }             from '../payment/models'
import { IState, IData }      from './models'

type TMethod = 'card' | 'cash';

class TattooParlorStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    show: false,
    actives: {
      section: -1,
      item: -1,
      color: -1,
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

  setShow = (status: boolean) => this.state.show = status

  setMoney = (money: IMoney) => this.state.money = money

  setData = (data: IData) => {
    if (data.businessId !==
      undefined) this.state.data.businessId = data.businessId
    if (data.businessType !==
      undefined) this.state.data.businessType = data.businessType
    if (data.itemsList !==
      undefined) this.state.data.itemsList = data.itemsList
    this.clearActives()
  }

  setActiveSection = (id: number) => {
    this.state.actives.section = id
    this.state.actives.item = -1
    this.state.actives.hand = -1
  }

  setActiveItem = (id: number) => this.state.actives.item = id
  setActiveHand = (id: number) => this.state.actives.hand = id
  setActiveColor = (id: number) => this.state.actives.color = id

  clearActives = () => {
    this.state.actives.section = -1
    this.state.actives.item = -1
    this.state.actives.color = -1
    this.state.actives.hand = -1
  }

  payAction = (method: TMethod) => {
    // @ts-ignore
    window.frontTrigger(
      'clothes-shop.buy',
      method,
      this.state.actives
    )
  }
}

const store = new TattooParlorStore()
export { store }
