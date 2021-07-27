import { TPayment } from '../../src/modules/shop/models'

interface IDataItem {
  itemId: number,
  quantity: number,
  name: string
}

export interface ShopDocs {
  'shop.buy': [payment: TPayment, data: IDataItem[]]
}