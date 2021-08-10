import React        from 'react'
import { observer } from 'mobx-react-lite'
import { SlotList } from './slot-list'

export const PlayerInventory = observer(() => {
  return (
    <div className='player-inventory'>
      <div className='inventory-title'>Сумка</div>
      <SlotList fromSlot={1} toSlot={25} idInventory={0} />
      <img src='' alt='' className='inventory-icon' />
    </div>
  )
})