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
    case 1:
      return <Equipment />
    case 2:
      return <TradeInventory />
    case 3:
      return <TrunkInventory />
    case 4:
      return <WarehouseInventory />
    case 5:
      return <ClosetInventory />
    case 6:
      return <AdminInventory />
    default:
      return null
  }
})