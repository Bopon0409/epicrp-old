export type TDndItem = { position: TPosition, idImg: string }

export type TBag = { slots: number, weight: number }

export type TIndicators = [number, number, number, number]

export type THotKeys = [string, string, string, string]

export type TInventoryId = 0 | 1 | 2 | 3 | 4 | 5 | 6

// Inventory ID
// 0 - Экипировка (equipment)
// 1 - Склад (warehouse)
// 2 - Багажник (trunk)
// 3 - Шкаф (closet)
// 4 - Обмен мой (trade in)
// 5 - Обмен чужой (trade out)
// 6 - Админ инвентарь (admin)

export type TData = [IItem[], IItem[], IItem[], IItem[], IItem[], IItem[], IItem[]]

export type TModalActiveBtn = 'use' | 'separate' | 'remove'

export type TModalUseBtn = 'Использовать' | 'Надеть' | 'Снять'

export type TEquipmentSlot = 201 | 202 | 203 | 204 |
  205 | 206 | 207 | 208 | 209 | 210 | 211 | 212

export type TInventoryPage = 'equipment' | 'trade' |
  'trunk' | 'warehouse' | 'closet' | 'admin' | null

export type TPosition = {
  idSlot: number
  idInventory: TInventoryId
}

export interface TModal {
  x: number
  y: number
  activeBtn: TModalActiveBtn | null
  range: number
  position: TPosition
  item: IItem
}

export interface IItem {
  id: string
  idImg: string
  idSlot: number
  quantity: number
  weight: number
  equipment: boolean
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

export interface IState {
  page: TInventoryPage
  data: TData

  trunk: IPageProps
  warehouse: IPageProps
  closet: IPageProps
  trade: ITrade
  bag: TBag | null

  adminSearchInput: string
  adminSearch: string

  modal: TModal | null
  indicators: TIndicators
  maxWeight: number
  hotKeys: THotKeys
  dndItem: TDndItem | null
}