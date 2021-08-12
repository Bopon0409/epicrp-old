type TInventoryId = 0 | 1 | 2 | 3 | 4 | 5 | 6
type TPosition = { idSlot: number, idInventory: TInventoryId }

export interface InventoryDocs {
  'inventory.use': [position: TPosition]
  'inventory.separate': [position: TPosition, quantity: number]
  'inventory.remove': [position: TPosition, quantity: number]
  'inventory.move': [positionFrom: TPosition, positionTo: TPosition]
  // inventory.move (inventoryId: 0)
  // 1-25 - инвентарь игрока
  // 26-35 - сумка
  // 101-104 - быстрые слоты
  // 200 слот - надеть на персонажа
}