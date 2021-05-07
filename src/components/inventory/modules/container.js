import { observer } from 'mobx-react-lite'
import React from 'react'
import { DndContext } from '@dnd-kit/core'
import store from '../inventory-store'

import bagIcon from '../images/bag.png'
import SlotList from './slot-list'
import Equipment from './equipment'
import DragOverlay from './overlay'
import Trade from './trade'

export default observer(() => {
  const { onDragStart, onDragEnd, bagType } = store
  const { mode, trunk } = store.state
  const bagToSlot = bagType > 1 ? 60 : 55
  console.log(mode)

  return (
    <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <DragOverlay />

      <div className='inventory-page__container container'>
        {mode === 0 && <Equipment />}

        {(mode === 1 || mode === 2) && <Trade />}

        {mode === 3 && (
          <div className='inventory'>
            <div className='title'>Склад</div>
            <SlotList fromSlot={401} toSlot={500} skroll={true} />
          </div>
        )}

        {mode === 4 && (
          <div className='inventory'>
            <div className='title'>Багажник</div>
            <div className='sub-title'>{trunk.trunkName}</div>
            <SlotList
              fromSlot={601}
              toSlot={600 + trunk.trunkSize}
              skroll={true}
            />
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
