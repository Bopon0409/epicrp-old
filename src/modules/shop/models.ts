export type TPayment = 'cash' | 'card1' | 'card2'

export interface ICard {
  'accountId': string
  'cardName': string
  'balance': number
}

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

export interface IState {
  money: { cash: number, cards: ICard[] }
  sectionCurrent: number | null
  sectionList: ISection[]
  shoppingCart: IItem[]
  businessId: number
  cartMode: boolean
  payment: TPayment
  active: boolean
}

export interface IData {
  businessId?: number
  money?: { cash: number, cards: ICard[] }
  sectionList?: ISection[]
}