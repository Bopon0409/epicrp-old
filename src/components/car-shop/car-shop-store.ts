import { makeAutoObservable }  from 'mobx'
import { IState, IData, ICar } from './models'

class CarShopStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    currentCar: null,
    businessName: '',
    carList: [],
    colorMain: null,
    colorAdditional: null,
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

  payAction = () => {}
}

const store = new CarShopStore()

export { store }
