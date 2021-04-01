import { observer } from 'mobx-react-lite'
import React from 'react'
import { DndContext } from '@dnd-kit/core'
import store from '../../../store/inventory/inventory-store'

import bagIcon from '../images/bag.png'
import SlotList from './slot-list'
import Equipment from './equipment'

export default observer(() => {
  const { onDragStart, onDragEnd, getBagType } = store
  const bagType = getBagType()
  const bagToSlot = bagType > 1 ? 60 : 55

  return (
    <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <div className='inventory-page__container container'>
        <Equipment />

        {bagType && (
          <div className='bag'>
            <div className='title'>Сумка</div>
            <SlotList fromSlot={51} toSlot={bagToSlot} bagType={bagType} />
            <img src={bagIcon} alt='' className='icon' />
          </div>
        )}

        <div className='inventory'>
          <div className='title'>Инвентарь</div>
          <SlotList fromSlot={1} toSlot={25} />
        </div>

        <div className='fast-panel'>
          <SlotList fromSlot={101} toSlot={104} />
          <div className='title'>Быстрый доступ</div>
        </div>
      </div>
    </DndContext>
  )
})
