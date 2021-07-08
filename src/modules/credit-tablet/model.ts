export type TCreditStatus = 'active' | 'finished' | 'failed'

export interface IPropertyItem {
  id: number
  type: string
  name: string
  price: number
}

export interface ICredit {
  name: string
  status: TCreditStatus
}

export interface IData {
  name: string
  rating: number
  money: number
  property: IPropertyItem[]
  credits: ICredit[]
}

export interface IState {
  active: boolean
  modalActive: boolean
  input: number
  selectedPropertyId: number | null

  name: string
  rating: number
  money: number
  property: IPropertyItem[]
  credits: ICredit[]
}