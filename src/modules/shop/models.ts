export interface ICard {
  'balance': number,
  'cardName': string,
  'accountId': string
}

export interface IItem {
  itemId: number,
  name: string,
  quantity: number,
  description: string,
  price: number
}

export interface ISection {
  sectionId: number,
  sectionName: string,
  items: IItem[]
}

export type TPayment = 'cash' | 'card1' | 'card2'

export interface IState {
  money: { cash: number, cards: ICard[] },
  sectionCurrent: number | null,
  sectionList: ISection[],
  shoppingCart: IItem[],
  businessId: number,
  cartMode: boolean,
  payment: TPayment
  active: boolean,
}

export interface IData {
  businessId?: number,
  money?: { cash: number, cards: ICard[] },
  sectionList?: ISection[]
}