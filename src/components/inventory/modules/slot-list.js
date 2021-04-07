import { observer } from 'mobx-react-lite'
import React from 'react'
import Slot from './slot'
import store from '../../../store/inventory/inventory-store'

export default observer(({ fromSlot, toSlot, bagType, skroll }) => {
  const list = []
  for (let i = fromSlot; i <= toSlot; i++) {
    const item = store.getItem(i)
    list.push(<Slot id={i} key={`slote#${i}`} item={item} />)
  }

  let classes = 'slot-list'
  if (bagType === 1) classes += ' small-bag'
  if (skroll) classes += ' skroll'

  return <div className={classes}>{list}</div>
})
