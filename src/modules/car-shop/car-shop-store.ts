import { makeAutoObservable }  from 'mobx'
import { IState, IData, ICar } from './models'
import colors                  from './colors.json'

type TMethod = 'card' | 'cash'
type TCardId = string | null

class CarShopStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    currentCar: null,
    businessName: '',
    carList: [],
    colorMain: colors.main[0].name,
    colorAdditional: colors.additional[0].name,
    money: { cash: 0, cards: [] }
  }

  setActive = (active: boolean) => this.state.active = active
  setActiveCar = (currentCar: number) => {
    window.frontTrigger('car-shop.setActiveCar', currentCar);
    this.state.currentCar = currentCar
  }
  setMainColor = (color: string) => {
    window.frontTrigger('car-shop.setMainColor', color);
    this.state.colorMain = color;
  }
  setAdditionalColor = (color: string) => {
    window.frontTrigger('car-shop.setAdditionalColor', color);
    this.state.colorAdditional = color;
  }

  setData = (data: IData) => {
    if (data.money?.cash) this.state.money.cash = data.money.cash
    if (data.money?.cards?.length) this.state.money.cards = data.money.cards
    if (data.businessName) this.state.businessName = data.businessName
    if (data.carList?.length) this.state.carList = data.carList
  }

  get currentCar (): ICar | null {
    const { carList, currentCar } = this.state
    return carList.find((car) => car.id === currentCar) || null
  }

  getCurrentMoney = (method: TMethod, cardId: TCardId): number => {
    const { cash, cards } = this.state.money
    if (method === 'card') {
      const card = cards.find((card) => card.accountId === cardId)
      return card?.balance || 0
    } else return cash
  }

  payAction = (method: TMethod, cardId: TCardId) => {
    const { state: { colorMain, colorAdditional }, currentCar } = this
    if (!currentCar) return
    window.frontTrigger('car-shop.buy', {
      carId: currentCar.id, colorMain, colorAdditional,
      method, cardId: cardId
    })
  }

}

const store = new CarShopStore()
export { store }
