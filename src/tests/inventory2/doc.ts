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

export type TEquipmentSlot = 201 | 202 | 203 | 204 |
  205 | 206 | 207 | 208 | 209 | 210 | 211 | 212

export type TInventoryPage = 1 | 2 | 3 | 4 | 5 | 6 | null

export interface TPosition {
  idSlot: number
  idInventory: TInventoryId
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