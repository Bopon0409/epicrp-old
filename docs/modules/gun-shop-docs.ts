import { IGun } from '../../src/modules/gun-shop/model'

export interface GunShopDocs {
  // Обновление категорий, оружия и модификаций
  'gun-shop.category': [value: number]
  'gun-shop.gun': [value: number]
  'gun-shop.mod': [value: number | null]

  // Покупка оружия
  'gun-shop.buy': {
    method: 'cash' | 'card', cardId: string | null, cart: IGun[], sum: number
  }
}