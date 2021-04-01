import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import Item from './item'

export default function EquipmentSlot ({ id, item }) {
  const { setNodeRef: setNodeRefDroppable } = useDroppable({ id })
  const style = item
    ? 'equipment-list__slot'
    : 'equipment-list__slot equipment-list__slot_empty'

  return (
    <div className={style} ref={setNodeRefDroppable}>
      {item ? <Item item={item} id={id} /> : null}
    </div>
  )
}
