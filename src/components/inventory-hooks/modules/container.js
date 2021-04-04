import { observer } from 'mobx-react-lite'
import React from 'react'
import { DndContext, DragOverlay } from '@dnd-kit/core'
import store from '../../../store/inventory/inventory-store'

import bagIcon from '../images/bag.png'
import SlotList from './slot-list'
import Equipment from './equipment'

export default observer(() => {
  const { onDragStart, onDragEnd, getBagType } = store
  const { mode, drugId } = store.state
  const bagType = getBagType()
  const bagToSlot = bagType > 1 ? 60 : 55

  return (
    <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <DragOverlay>
        <img
          style={{ position: 'relative', left: '18px', top: '19px' }}
          src={`./images/inventory/items/id${
            store.getItem(drugId)?.idItem
          }.png`}
          alt=''
        />
      </DragOverlay>

      <div className='inventory-page__container container'>
        {mode === 0 && <Equipment />}

        {mode === 3 && (
          <div className='inventory'>
            <div className='title'>Склад</div>
            <SlotList fromSlot={401} toSlot={500} skroll={true} />
          </div>
        )}

        {mode === 4 && (
          <div className='inventory'>
            <div className='title'>Багажник</div>
            <SlotList fromSlot={401} toSlot={500} skroll={true} />
          </div>
        )}

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
