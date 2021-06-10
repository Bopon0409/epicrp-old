import { makeAutoObservable }  from 'mobx'
import { IState, IData, ICar } from './models'
import colors                  from './colors.json'

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
  setActiveCar = (currentCar: number) => this.state.currentCar = currentCar
  setMainColor = (color: string) => this.state.colorMain = color
  setAdditionalColor = (color: string) => this.state.colorAdditional = color

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

  getCurrentMoney = (method: 'card' | 'cash',
    currentCard: string | null): number => {
    const { cash, cards } = this.state.money
    if (method === 'cash') return cash
    else return cards
      .find((card) => card.accountId === currentCard)?.balance || 0
  }

  payAction = (method: 'card' | 'cash', currentCard: string | null) => {
    const curMoney = this.getCurrentMoney(method, currentCard)
    if (this.currentCar && this.currentCar.price <= curMoney) {
      const { state: { colorMain, colorAdditional }, currentCar } = this
      // @ts-ignore
      window.frontTrigger('car-shop.buy', {
        carId: currentCar.id, colorMain, colorAdditional,
        method, cardId: currentCard
      })
    }
  }
}

const store = new CarShopStore()

export { store }
