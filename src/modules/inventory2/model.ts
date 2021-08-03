// 0 - инвентарь
// 1 - склад
// 2 - багажник
// 3 - шкаф
// 4 - обмен мой
// 5 - обмен чужой
// 6 - админ

export type TInventoryId = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type TData = [IItem[], IItem[], IItem[], IItem[], IItem[], IItem[], IItem[]]
export type TModalActiveBtn = 'use' | 'separate' | 'remove'
export type TModalUseBtn = 'use' | 'equip' | 'take-off'
export type TEquipmentSlot = 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 |
  209 | 210 | 211 | 212
export type TInventoryPage =
  'equipment'
  | 'swap'
  | 'trunk'
  | 'warehouse'
  | 'closet'
  | 'admin'

export interface TPosition {
  idSlot: number
  idInventory: TInventoryId
}

export interface TModal {
  x: number
  y: number
  activeBtn: TModalActiveBtn | null
  separateRange: number
  position: TPosition
  item: IItem
}

export interface IItem {
  id: string
  idImg: string
  idSlot: number
  quantity: number
  weight: number
  equipmentSlot: TEquipmentSlot | null
  fastSlot: boolean
  bagType: 1 | 2 | 3 | null
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

  data: TData
  trunk: ITrunk
  trade: ITrade

  dndItem: TPosition | null
  adminSearch: string
  modal: TModal | null
  indicators: [number, number, number]
}