export type TContract =
  'bank-insurance'
  | 'client-insurance'
  | 'bank-credit'
  | 'client-credit'

export interface IProperty {
  id: number
  name: string
  price: number
}

export interface IBankInsuranceData {
  type: 'bank-insurance'
  names: [string, string]
  tariffs: string[]
}

export interface IClientInsuranceData {
  type: 'client-insurance'
  names: [string, string]
  tariff: string
  signature: string
}

export interface IBankCreditData {
  type: 'bank-credit'
  names: [string, string]
  properties: IProperty[]
  rate: number
}

export interface IClientCreditData {
  type: 'client-credit'
  names: [string, string]
  sum: number
  duration: number
  rate: number
  property: IProperty
  signature: string
}

export interface IState {
  type: TContract | null
  date: Date | null
  names: [string, string]
  signature: string
  ref: any

  // insurance
  tariffs: string[]
  currentTariff: string | undefined
  tariff: string

  // credit
  properties: IProperty[]
  property: IProperty | null
  duration: number
  currentDuration: string | undefined
  currentProperty: IProperty | null
  currentSum: number
  rate: number
  sum: number
}