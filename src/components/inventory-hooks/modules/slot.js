import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import Item from './item'

export default function Slot ({ id, item }) {
  const { setNodeRef: setNodeRefDroppable } = useDroppable({ id })

  return (
    <div className='slot' ref={setNodeRefDroppable}>
      {item ? <Item item={item} id={id} /> : null}
    </div>
  )
}
