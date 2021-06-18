import React            from 'react'
import { useDraggable } from '@dnd-kit/core'

export default function Draggable ({ id, children, classname }) {
  const { attributes, listeners, setNodeRef } = useDraggable({ id })
  return (
    <div
      className={classname}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{ height: '100%' }}
    >
      {children}
    </div>
  )
}
