import React        from 'react'
import { observer } from 'mobx-react-lite'
import { Slot }     from './slot'

export const FastInventory = observer(() => {
  return (
    <div className='fast-slots'>
      <div className='fast-slots__container'>
        <Slot position={{ idInventory: 0, idSlot: 101 }} type={'fast'} />
        <Slot position={{ idInventory: 0, idSlot: 102 }} type={'fast'} />
        <Slot position={{ idInventory: 0, idSlot: 103 }} type={'fast'} />
        <Slot position={{ idInventory: 0, idSlot: 104 }} type={'fast'} />
      </div>
      <div className='fast-slots__title'>Быстрый доступ</div>
    </div>
  )
})