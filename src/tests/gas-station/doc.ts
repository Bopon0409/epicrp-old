import { IMoney } from '../../modules/payment/models'

export interface IData {
  money?: IMoney
  gasTank?: 70
  fuel?: IFuel[]
  canisterAvailability?: boolean
  businessNum?: number
  canisterPrice?: number
}

export interface IFuel {
  id: number
  price: number
  quantity: number
}