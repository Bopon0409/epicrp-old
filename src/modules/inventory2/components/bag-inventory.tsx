import React        from 'react'
import { observer } from 'mobx-react-lite'
import { SlotList } from './slot-list'
import { store }    from '../inventory-store'

export const BagInventory = observer(() => {
  const bagSlots = store.state.bag.slots
  return (
    <div className='bag-inventory'>
      <div className='inventory-title'>Сумка</div>
      <SlotList fromSlot={26} toSlot={26 + bagSlots} idInventory={0} />
      <img src='' alt='' className='inventory-icon' />
    </div>
  )
})