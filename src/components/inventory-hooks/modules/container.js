import { observer } from 'mobx-react-lite'
import React from 'react'
import { DndContext } from '@dnd-kit/core'
import store from '../../../store/inventory/inventory-store'

import bagIcon from '../images/bag.png'
import SlotList from './slot-list'

export default observer(() => {
  const { bagType } = store.state
  const { onDragStart, onDragEnd } = store

  return (
    <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <div className='inventory-page__container container'>
        <div className='equipment'>
          <div className='title'>Экипировка</div>
          <div className='equipment-list'>
            <div className='equipment-list__container'>
              <div className='equipment-list__slot equipment-list__slot_empty'></div>
              <div className='equipment-list__slot equipment-list__slot_empty'></div>
            </div>
            <div className='equipment-list__container'>
              <div className='equipment-list__slot equipment-list__slot_empty'></div>
              <div className='equipment-list__slot equipment-list__slot_empty'></div>
            </div>
            <div className='equipment-list__container'>
              <div className='equipment-list__slot equipment-list__slot_empty'></div>
              <div className='equipment-list__slot equipment-list__slot_empty'></div>
            </div>
            <div className='equipment-list__container'>
              <div className='equipment-list__slot equipment-list__slot_empty'></div>
              <div className='equipment-list__slot equipment-list__slot_empty'></div>
            </div>
            <div className='equipment-list__container'>
              <div className='equipment-list__slot equipment-list__slot_empty'></div>
              <div className='equipment-list__slot equipment-list__slot_empty'></div>
            </div>
            <div className='equipment-list__container'>
              <div className='equipment-list__slot equipment-list__slot_empty'></div>
              <div className='equipment-list__slot equipment-list__slot_empty'></div>
            </div>
          </div>
        </div>
        {bagType && (
          <div className='bag'>
            <div className='title'>Сумка</div>
            <SlotList
              fromSlot={26}
              toSlot={bagType > 1 ? 35 : 30}
              bagType={bagType}
            />
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
