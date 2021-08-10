import React            from 'react'
import { observer }     from 'mobx-react-lite'
import { TInventoryId } from '../model'
import { Slot }         from './slot'

export interface ISlotListProps {
  fromSlot: number
  toSlot: number
  idInventory: TInventoryId
}

export const SlotList = observer((props: ISlotListProps) => {
  const { fromSlot, toSlot, idInventory } = props

  const list = []
  for (let i = fromSlot; i <= toSlot; i++) {
    list.push(<Slot position={{ idSlot: i, idInventory }} type={'common'} />)
  }

  return (
    <div className='slot-list'>{list}</div>
  )
})