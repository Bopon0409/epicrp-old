import { observer } from 'mobx-react-lite'
import React from 'react'
import Slot from './slot'
import store from '../../../store/inventory/inventory-store'

export default observer(({ fromSlot, toSlot, bagType }) => {
  const list = []
  for (let i = fromSlot; i <= toSlot; i++) {
    const item = store.getItem(i)
    list.push(<Slot id={i} key={`slote#${i}`} item={item} />)
  }

  return (
    <div className={bagType === 1 ? 'slot-list small-bag' : 'slot-list'}>
      {list}
    </div>
  )
})
