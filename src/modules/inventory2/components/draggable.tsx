import React            from 'react'
import { observer }     from 'mobx-react-lite'
import { useDraggable } from '@dnd-kit/core'

export interface IDraggableProps {
  id: string,
  children: React.ReactElement
}

export const Draggable = observer((props: IDraggableProps) => {
  const { id, children } = props
  const { attributes, listeners, setNodeRef } = useDraggable({ id })

  return (
    <div ref={setNodeRef}{...listeners}{...attributes}>{children}</div>
  )
})