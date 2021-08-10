// 0 - инвентарь
// 1 - склад
// 2 - багажник
// 3 - шкаф
// 4 - обмен мой
// 5 - обмен чужой
// 6 - админ

export type TBag = { slots: number, weight: number }
export type TIndicators = [number, number, number]
export type THotKeys = [string, string, string, string]
export type TInventoryId = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type TData = [IItem[], IItem[], IItem[], IItem[], IItem[], IItem[], IItem[]]
export type TModalActiveBtn = 'use' | 'separate' | 'remove' | 'get'
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
  equipment: 0 | 1 | 2
  usable: boolean
  name: string
  description: string
}

export interface IPageProps {
  name?: string
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