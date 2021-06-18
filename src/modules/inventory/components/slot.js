import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import Draggable from './draggable'
import Item from './item'
import { observer } from 'mobx-react-lite'
import store from '../inventory-store'

export default observer(({ id, item }) => {
  const isNotBlockTrade1 = id < 301 || id > 350 || !store.state.trade.isReady1
  const isNotTrade2 = id < 351 || id > 400
  return (
    <div
      className='slot'
      id={`slot${id}`}
      ref={useDroppable({ id }).setNodeRef}
    >
      {item && isNotTrade2 && isNotBlockTrade1 ? (
        <Draggable id={id}>
          <Item id={id} item={item} />
        </Draggable>
      ) : null}
      {(item && !isNotTrade2) || (item && !isNotBlockTrade1) ? (
        <Item id={id} item={item} />
      ) : null}
    </div>
  )
})
