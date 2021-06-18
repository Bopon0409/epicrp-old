import { observer } from 'mobx-react-lite'
import React from 'react'
import Slot from './slot'
import store from '../inventory-store'

export default observer(({ fromSlot, toSlot, bagType, scroll }) => {
  const list = []
  for (let i = fromSlot; i <= toSlot; i++) {
    const item = store.getItem(i)
    list.push(<Slot id={i} key={`slot#${i}`} item={item} />)
  }

  let classes = 'slot-list'
  if (bagType === 1) classes += ' small-bag'
  if (scroll) classes += ' scroll'

  return <div className={classes}>{list}</div>
})
