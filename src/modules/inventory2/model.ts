export type TEquipmentSlot = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type TInventoryId = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type TInventoryPage =
  'equipment'
  | 'swap'
  | 'trunk'
  | 'warehouse'
  | 'closet'
  | 'admin'

export interface IItemPosition {
  idInventory: TInventoryId
  idSlot: number
}

export interface TModal {
  x: number
  y: number
  itemPosition: IItemPosition
}

export interface IItem {
  id: string
  idImg: string
  idSlot: number
  quantity: number
  weight: number
  equipmentSlot: TEquipmentSlot | null
  usable: boolean
  name: string
  description: string
}

export interface ITrunk {
  name: string
  size: number
  maxWeight: number
}

export interface ITrade {
  name: string
  money1: number
  money2: number
  maxMoney: number
  btnReady1: boolean
  btnReady2: boolean
  btnFinish: boolean
}

export interface IState {
  page: TInventoryPage | null

  data: [IItem[], IItem[], IItem[], IItem[], IItem[], IItem[], IItem[]]
  trunk: ITrunk
  trade: ITrade

  dndItem: IItemPosition | null
  adminSearch: string
  modal: TModal | null
  indicators: [number, number, number]
}