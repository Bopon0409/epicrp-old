import { observer } from 'mobx-react-lite'
import React from 'react'
import store from '../../../store/inventory/inventory-store'
import { useDroppable } from '@dnd-kit/core'
import Item from './item'

export default function Slot ({ id, item }) {
  const { setNodeRef: setNodeRefDroppable } = useDroppable({ id })

  console.log('render')

  return (
    <div className='slot' ref={setNodeRefDroppable}>
      {item ? <Item item={item} id={id} /> : null}
    </div>
  )
}
