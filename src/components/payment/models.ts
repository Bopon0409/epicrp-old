export type TMethod = 'cash' | 'card'

export interface IState {
  selectActive: boolean,
  currentCard: string | null,
  method: TMethod
}

export interface ICard {
  balance: number,
  cardName: string,
  accountId: string
}

export interface IMoney {
  cash: number,
  cards: ICard[]
}