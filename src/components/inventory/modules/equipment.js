import { observer } from 'mobx-react-lite'
import store from '../../../store/inventory/inventory-store'
import React from 'react'
import EquipmentSlot from './equipment-slot'

export default observer(() => {
  const items = []
  for (let i = 201; i <= 212; i++) {
    items.push({ id: i, item: store.getItem(i) })
  }
  return (
    <div className='equipment'>
      <div className='title'>Экипировка</div>
      <div className='equipment-list'>
        <div className='equipment-list__container'>
          <EquipmentSlot {...items[0]} />
          <EquipmentSlot {...items[6]} />
        </div>
        <div className='equipment-list__container'>
          <EquipmentSlot {...items[1]} />
          <EquipmentSlot {...items[7]} />
        </div>
        <div className='equipment-list__container'>
          <EquipmentSlot {...items[2]} />
          <EquipmentSlot {...items[8]} />
        </div>
        <div className='equipment-list__container'>
          <EquipmentSlot {...items[3]} />
          <EquipmentSlot {...items[9]} />
        </div>
        <div className='equipment-list__container'>
          <EquipmentSlot {...items[4]} />
          <EquipmentSlot {...items[10]} />
        </div>
        <div className='equipment-list__container'>
          <EquipmentSlot {...items[5]} />
          <EquipmentSlot {...items[11]} />
        </div>
      </div>
    </div>
  )
})
