import React        from 'react'
import { observer } from 'mobx-react-lite'
import { SlotList } from './slot-list'
import { store }    from '../inventory-store'
import bagIcon      from '../images/bag-icon.svg'

export const BagInventory = observer(() => {
  const { bag } = store.state
  return bag ? (
    <div className='bag-inventory'>
      <div className='inventory-title'>Сумка</div>
      <SlotList fromSlot={26} toSlot={25 + bag.slots} idInventory={0}
        bag={true} />
      <div className='inventory-icon-container'>
        <img src={bagIcon} alt='' className='inventory-icon' />
      </div>
    </div>
  ) : null
})