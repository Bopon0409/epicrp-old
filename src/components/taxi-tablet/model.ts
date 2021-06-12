import Timeout = NodeJS.Timeout

export type TTabletStatus = 'list' | 'order' | 'reject' | 'reject-next'

export interface IActiveOrder {
  id: number
  client: string
  rating: number
  distance: number
  addressFrom: string
  addressTo: string
  comment: string
  taximeter: number
}

export interface IOrder {
  id: number
  time: string
  client: string
  distance: number
  comment: string
}

export interface IState {
  // Состояние планшета
  active: boolean
  tabletStatus: TTabletStatus

  // Активный заказ
  activeOrder: IActiveOrder | null
  orderTimer: Timeout | null
  orderTime: number
  rejectReason: string

  // Данные игрока
  workStatus: boolean
  userName: string
  progress: number
  workTime: string
  carClass: string
  nextLvl: number
  rating: number
  rate: number
  car: string
  lvl: number

  // Массив заказов
  orders: IOrder[]
}

export interface IData {
  activeOrder?: IActiveOrder
  orders?: IOrder[]
  workStatus?: boolean
  userName?: string
  progress?: number
  workTime?: string
  carClass?: string
  nextLvl?: number
  rating?: number
  rate?: number
  car?: string
  lvl?: number
}