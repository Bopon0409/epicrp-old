import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

export default function Item ({ item, id }) {
  const { quantity, weight, idItem } = item
  const {
    attributes,
    listeners,
    setNodeRef: setNodeRefDraggable,
    transform
  } = useDraggable({ id })

  return (
    <div
      className='item'
      ref={setNodeRefDraggable}
      style={{ transform: CSS.Translate.toString(transform) }}
      {...listeners}
      {...attributes}
    >
      <img src={`./images/inventory/items/id${idItem}.png`} alt='' />
      <div className='item__label-container'>
        <div className='item__label-element'>{quantity}</div>
        <div className='item__label-element'>
          {(quantity * weight).toFixed(1)}кг
        </div>
      </div>
    </div>
  )
}
