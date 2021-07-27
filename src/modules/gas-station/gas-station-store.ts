import { makeAutoObservable }             from 'mobx'
import { IData, IState }                  from './model'
import { descriptions, IFuelDescription } from './data'

class GasStationStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  initState: IState = {
    slider: 0,
    active: false,
    money: { cash: 0, cards: [] },
    canisterAvailability: false,
    canisterInCart: false,
    gasTank: 0,
    fuel: [],
    currentFuelId: null,
    businessNum: 0,
    canisterPrice: 0,
    minValue: 0
  }

  state: IState = this.initState

  setActive = (active: boolean) => {
    this.state.active = active
    if (!active) this.state = this.initState
  }

  canisterToggle = () => this.state.canisterInCart = !this.state.canisterInCart

  setSlider = (value: number) => {
    if (value <= this.sliderMaxValue && value >= this.state.minValue)
      this.state.slider = value
  }

  setCurrentFuel = (id: number) => {
    this.state.currentFuelId = id
    this.setSlider(this.state.minValue)
  }

  setData = (data: IData) => {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (key === 'gasTankFullness') {
          // @ts-ignore
          this.state.slider = data[key]
          // @ts-ignore
          this.state.minValue = data[key]
          // @ts-ignore
        } else this.state[key] = data[key]
      }
    }
  }

  getFuelName = (id: number): [string, string] => {
    return descriptions.find(fuel => id === fuel.id)?.name || ['', '']
  }

  get currentFuel (): IFuelDescription | null {
    const { currentFuelId } = this.state
    return descriptions.find(({ id }) => id === currentFuelId) || null
  }

  get currentPrice (): number {
    const {
      fuel, currentFuelId, slider, canisterPrice, canisterInCart, minValue
    } = this.state
    if (!currentFuelId) return canisterInCart ? canisterPrice : 0
    const fuelPrice = fuel[currentFuelId].price * (slider - minValue)
    return canisterInCart ? fuelPrice + canisterPrice : fuelPrice
  }

  get paymentBlocked (): boolean {
    const { slider, currentFuelId, canisterInCart, minValue } = this.state
    const checkFuel = slider - minValue !== 0 && currentFuelId !== null
    return !(checkFuel || canisterInCart)
  }

  get sliderMaxValue (): number {
    const { fuel, currentFuelId, gasTank } = this.state
    if (currentFuelId === null) return 0

    const fuelQuantity = fuel[currentFuelId].quantity
    if (fuelQuantity < gasTank) return fuelQuantity
    else return gasTank
  }

  buy = (method: 'card' | 'cash', currentCard: string | null) => {
    const { currentFuelId, slider, canisterInCart } = this.state
    if (currentFuelId === null) return
    window.frontTrigger('gas-station.buy', {
      method, card: currentCard, quantity: slider,
      id: currentFuelId, canister: canisterInCart
    })
  }
}

const store = new GasStationStore()
export { store }