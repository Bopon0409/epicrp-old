export type TColors = "silver" | "gold" | "platinum" | "red" | "blue";

export interface IState {
  playerName: string,
  coins: number,
  donatProducts: IDonatProduct[],
  operationsHistry: IOperation[],
  prizeWarehouse: IDonatItem[]
}

export interface IOperation {
  type: string,
  amount: number,
  date: string
}

export interface IDonatItem {
  img: string,
  tier: number,
  name: string,
  comment: string,
  sellPrice: number
}

export interface IDonatProduct {
  name: string,
  price: number,
  content: null | IDonatItem[],
  color: TColors
}