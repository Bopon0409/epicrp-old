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

export interface IState {
  active: boolean,
  businessId: number,
  money: { cash: number, cards: ICard[] },
  sectionCurrent: number | null,
  sectionList: ISection[],
  cartMode: boolean,
  shoppingCart: IItem[]
}

export interface IData {
  businessId?: number,
  money?: { cash: number, cards: ICard[] },
  sectionList?: ISection[]
}