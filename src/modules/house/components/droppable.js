import React            from 'react'
import { useDroppable } from '@dnd-kit/core'

export default function Droppable ({ id, children }) {
  const { isOver, setNodeRef } = useDroppable({ id })
  return (
    <div ref={setNodeRef} style={{ color: isOver ? 'green' : undefined }}>
      {children}
    </div>
  )
}