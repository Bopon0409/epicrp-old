// интерфейс категории магазинов
export interface IItemList {
  name: string,
  price: number,
  colors: string[]
}

// интерфейс данных для магазинов
export interface IData {
  businessType: number, // тип бизнеса, если 0 - , 1 - , 2 - , 3 -
  businessId: number, // номер бизнес
  itemsList: IItemList[][] // категории в бизнесе
}

// интерфейс денег игрока
export interface IMoney {
  cash: number,
  cards: ICard[]
}
// интерфейс карты
export interface ICard {
  balance: number,
  cardName: string,
  accountId: string
}