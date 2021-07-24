export interface IActiveOrder {
  id: number
  client: string
  rating: number
  distance: number
  addressFrom: string
  addressTo: string
  taximeter: number
}

export interface IOrder {
  id: number
  time: string
  client: string
  distance: number
  comment: string
}

export interface IData {
  activeOrder?: IActiveOrder
  orders?: IOrder[]
  workStatus?: boolean
  userName?: string
  progress?: number
  workTime?: string
  transported?: number
  carClass?: string
  nextLvl?: number
  rating?: number
  rate?: number
  car?: string
  lvl?: number
}