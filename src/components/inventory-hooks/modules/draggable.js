import React from 'react'
import { useDraggable } from '@dnd-kit/core'

export default function Draggable ({ id, children }) {
  const { attributes, listeners, setNodeRef } = useDraggable({ id })

  return (
    <div ref={setNodeRef} {...listeners} {...attributes}>
      {children}
    </div>
  )
}
