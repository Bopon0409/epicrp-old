import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import Draggable from './draggable'
import Item from './item'

export default function Slot ({ id, item }) {
  return (
    <div className='slot' ref={useDroppable({ id }).setNodeRef}>
      {item ? (
        <Draggable id={id}>
          <Item id={id} item={item} />
        </Draggable>
      ) : null}
    </div>
  )
}
