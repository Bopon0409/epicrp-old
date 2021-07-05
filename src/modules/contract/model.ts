export type TContract = 'bank-insurance' | 'client-insurance' | null

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

export interface IState {
  date: Date | null
  names: [string, string]
  type: 'bank-insurance' | 'client-insurance' | null
  tariffs: string[]
  signature: string
  currentTariff: string | undefined
  tariff: string
  ref: any
}