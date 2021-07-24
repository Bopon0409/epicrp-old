import { IMoney } from '../../modules/payment/models'

export interface IItem {
  description: string
  quantity: number
  itemId: number
  price: number
  name: string
}

export interface ISection {
  sectionId: number
  sectionName: string
  items: IItem[]
}

export interface IData {
  businessId?: number
  money?: IMoney
  sectionList?: ISection[]
}