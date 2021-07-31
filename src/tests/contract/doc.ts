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

export interface IProperty {
  id: number
  name: string
  price: number
}