export type TCreditStatus = 'active' | 'finished' | 'failed'

export interface IData {
  name: string
  rating: number
  money: number
  property: IPropertyItem[]
  credits: ICredit[]
}

export interface ICredit {
  name: string
  status: TCreditStatus
}

export interface IPropertyItem {
  id: number
  type: string
  name: string
  price: number
}
