import React                  from 'react'
import { observer }           from 'mobx-react-lite'
import { store }              from '../inventory-store'
import { Equipment }          from './equipment'
import { TradeInventory }     from './trade-inventory'
import { TrunkInventory }     from './trunk-inventory'
import { WarehouseInventory } from './warehouse-inventory'
import { ClosetInventory }    from './closet-inventory'
import { AdminInventory }     from './admin-inventory'

export const CurrentBlock = observer(() => {
  switch (store.state.page) {
    case 'equipment':
      return <Equipment />
    case 'trade':
      return <TradeInventory />
    case 'trunk':
      return <TrunkInventory />
    case 'warehouse':
      return <WarehouseInventory />
    case 'closet':
      return <ClosetInventory />
    case 'admin':
      return <AdminInventory />
    default:
      return null
  }
})