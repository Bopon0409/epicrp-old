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
  type: 'common' | 'equipment' | 'fast'
}

export const Slot = observer((props: ISlotProps) => {
  const { position, type } = props
  const id = JSON.stringify(position)
  const { setNodeRef } = useDroppable({ id })
  const ref = type === 'common' ? setNodeRef : null
  const item = store.getItem(position)

  const equipmentId = position.idSlot - 200
  const imgPath = `./images/equipment/equipment-slot-${equipmentId}.png`
  const classes = cn('slot',
    type === 'equipment' && 'slot--equipment',
    type === 'fast' && 'slot--fast'
  )
  const selector = `slot${JSON.stringify(position)}`

  return (
    <div className={classes} ref={ref} id={selector}>{
      item ? (
        <Draggable id={id}>
          <Item item={item} idInventory={position.idInventory} />
        </Draggable>
      ) : type === 'equipment' && (
        <img src={imgPath} alt='' className='slot__equipment-empty' />
      )
    }</div>
  )
})