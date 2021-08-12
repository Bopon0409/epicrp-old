import React            from 'react'
import { observer }     from 'mobx-react-lite'
import { TInventoryId } from '../model'
import { Slot }         from './slot'
import cn               from 'classnames'

export interface ISlotListProps {
  fromSlot: number
  toSlot: number
  idInventory: TInventoryId
  bag?: boolean
}

export const SlotList = observer((props: ISlotListProps) => {
  const { fromSlot, toSlot, idInventory } = props
  const classes = cn('slot-list', props.bag && 'slot-list--bag')

  const list = []
  for (let i = fromSlot; i <= toSlot; i++) {
    const key = JSON.stringify({ idSlot: i, idInventory })
    list.push(
      <Slot position={{ idSlot: i, idInventory }} type={'common'} key={key} />
    )
  }

  return (
    <div className={classes}>{list}</div>
  )
})