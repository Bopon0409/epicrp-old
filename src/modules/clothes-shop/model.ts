import { IMoney } from '../payment/models'


export interface IClothesItem {
  name: string
  price: number
  colors: string[]
}

export interface IState {
  active: boolean
  activeSection: number | null
  activeItem: number | null
  activeColor: number | null
  businessId: number
  money: IMoney | null
  shopList: IClothesItem[][] | null
}

export interface IData {
  businessId?: number
  money?: IMoney
  shopList?: IClothesItem[][]
}