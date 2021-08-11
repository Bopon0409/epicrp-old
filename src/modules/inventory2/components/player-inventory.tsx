import React             from 'react'
import { observer }      from 'mobx-react-lite'
import { SlotList }      from './slot-list'
import { FastInventory } from './fast-inventory'

export const PlayerInventory = observer(() => {
  return (
    <div className='player-inventory'>
      <div className='inventory-title'>Инвентарь</div>
      <SlotList fromSlot={1} toSlot={25} idInventory={0} />
      <FastInventory />
    </div>
  )
})