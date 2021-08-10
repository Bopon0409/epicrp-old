import React            from 'react'
import { observer }     from 'mobx-react-lite'
import { TPosition }    from '../model'
import { store }        from '../inventory-store'
import { Item }         from './item'
import { useDroppable } from '@dnd-kit/core'
import { Draggable }    from './draggable'
import cn               from 'classnames'

export interface ISlotProps {
  position: TPosition
  type: 'common' | 'equipment'
}

export const Slot = observer((props: ISlotProps) => {
  const { position, type } = props
  const classes = cn('slot', type === 'equipment' && 'slot--equipment')
  const id = JSON.stringify(position)
  const { setNodeRef } = useDroppable({ id })
  const item = store.getItem(position)

  return (
    <div className={classes} ref={setNodeRef} key={id}>{
      item ? (
        <Draggable id={id}>
          <Item item={item} idInventory={position.idInventory} />
        </Draggable>
      ) : type === 'equipment' && (
        <img src={`./images/equipment/id${position.idSlot}.png`} alt=''
          className='slot__equipment-empty' />
      )
    }</div>
  )
})