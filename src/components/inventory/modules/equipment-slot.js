import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import Draggable from './draggable'
import Item from './item'

export default function EquipmentSlot ({ id, item }) {
  const style = item
    ? 'equipment-list__slot'
    : 'equipment-list__slot equipment-list__slot_empty'

  return (
    <div
      className={style}
      ref={useDroppable({ id }).setNodeRef}
      id={`slot${id}`}
    >
      {item ? (
        <Draggable id={id}>
          <Item item={item} id={id} />
        </Draggable>
      ) : null}
    </div>
  )
}
