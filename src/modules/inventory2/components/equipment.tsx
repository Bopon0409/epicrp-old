import React        from 'react'
import { observer } from 'mobx-react-lite'
import { Slot }     from './slot'

export const Equipment = observer(() => {
  return (
    <div className='equipment'>
      <div className='inventory-title'>Экипировка</div>
      <div className='equipment__container'>
        <Slot position={{ idSlot: 201, idInventory: 0 }} type={'common'} />
        <Slot position={{ idSlot: 207, idInventory: 0 }} type={'common'} />
      </div>
      <div className='equipment__container'>
        <Slot position={{ idSlot: 202, idInventory: 0 }} type={'common'} />
        <Slot position={{ idSlot: 208, idInventory: 0 }} type={'common'} />
      </div>
      <div className='equipment__container'>
        <Slot position={{ idSlot: 203, idInventory: 0 }} type={'common'} />
        <Slot position={{ idSlot: 209, idInventory: 0 }} type={'common'} />
      </div>
      <div className='equipment__container'>
        <Slot position={{ idSlot: 204, idInventory: 0 }} type={'common'} />
        <Slot position={{ idSlot: 210, idInventory: 0 }} type={'common'} />
      </div>
      <div className='equipment__container'>
        <Slot position={{ idSlot: 205, idInventory: 0 }} type={'common'} />
        <Slot position={{ idSlot: 211, idInventory: 0 }} type={'common'} />
      </div>
      <div className='equipment__container'>
        <Slot position={{ idSlot: 206, idInventory: 0 }} type={'common'} />
        <Slot position={{ idSlot: 212, idInventory: 0 }} type={'common'} />
      </div>
    </div>
  )
})