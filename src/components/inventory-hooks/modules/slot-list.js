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

  let className = 'slot-list'
  if (bagType) if (bagType === 1) className = 'slot-list small-bag'

  return <div className={className}>{list}</div>
})
