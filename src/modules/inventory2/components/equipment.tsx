import React            from 'react'
import { observer }     from 'mobx-react-lite'
import { Slot }         from './slot'
import { useDroppable } from '@dnd-kit/core'

export const Equipment = observer(() => {
  const { setNodeRef } = useDroppable({
    id: JSON.stringify({ idSlot: 200, idInventory: 0 })
  })
  
  return (
    <div className='equipment' ref={setNodeRef}>
      <div className='inventory-title'>Экипировка</div>
      <div className='equipment__block'>
        <div className='equipment__container'>
          <Slot position={{ idSlot: 201, idInventory: 0 }} type={'equipment'} />
          <Slot position={{ idSlot: 207, idInventory: 0 }} type={'equipment'} />
        </div>
        <div className='equipment__container'>
          <Slot position={{ idSlot: 202, idInventory: 0 }} type={'equipment'} />
          <Slot position={{ idSlot: 208, idInventory: 0 }} type={'equipment'} />
        </div>
        <div className='equipment__container'>
          <Slot position={{ idSlot: 203, idInventory: 0 }} type={'equipment'} />
          <Slot position={{ idSlot: 209, idInventory: 0 }} type={'equipment'} />
        </div>
        <div className='equipment__container'>
          <Slot position={{ idSlot: 204, idInventory: 0 }} type={'equipment'} />
          <Slot position={{ idSlot: 210, idInventory: 0 }} type={'equipment'} />
        </div>
        <div className='equipment__container'>
          <Slot position={{ idSlot: 205, idInventory: 0 }} type={'equipment'} />
          <Slot position={{ idSlot: 211, idInventory: 0 }} type={'equipment'} />
        </div>
        <div className='equipment__container'>
          <Slot position={{ idSlot: 206, idInventory: 0 }} type={'equipment'} />
          <Slot position={{ idSlot: 212, idInventory: 0 }} type={'equipment'} />
        </div>
      </div>
    </div>
  )
})