export interface IBankData {
  type: 'bank'
  names: [string, string]
  tariffs: string[]
}

export interface IClientData {
  type: 'client'
  names: [string, string]
  tariff: string
  signature: string
}

export interface IState {
  date: Date | null
  names: [string, string]
  type: 'bank' | 'client' | null
  tariffs: string[]
  signature: string
  currentTariff: string | undefined
  tariff: string
  ref: any
}