import React           from 'react'
import { observer }    from 'mobx-react-lite'
import { useSortable } from '@dnd-kit/sortable'
import { CSS }         from '@dnd-kit/utilities'

export default observer((props) => {
  console.log(props.id)
  const {
    attributes, listeners, setNodeRef, transform, transition
  } = useSortable({ id: props.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <div className='rank__item' {...attributes} {...listeners}
      ref={setNodeRef} style={style}>
      {props.item}
    </div>
  )
})