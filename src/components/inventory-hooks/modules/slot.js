import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import Item from './item'

export default function Slot ({ id, item }) {
  return (
    <div className='slot' ref={useDroppable({ id }).setNodeRef}>
      {item ? <Item id={id} item={item} /> : null}
    </div>
  )
}
