import { IMoney } from '../payment/models'

export interface IState {
  active: boolean
  money: IMoney
  canisterAvailability: boolean
  gasTank: 0
  minValue: number
  fuel: IFuel[]
  slider: number
  currentFuelId: number | null
  canisterInCart: boolean
  businessNum: number
  canisterPrice: number
}

export interface IFuel {
  id: number
  price: number
  quantity: number
}

export interface IData {
  money?: IMoney
  gasTank?: 70
  fuel?: IFuel[]
  canisterAvailability?: boolean
  businessNum?: number
  canisterPrice?: number
}