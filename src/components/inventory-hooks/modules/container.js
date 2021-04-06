import { observer } from 'mobx-react-lite'
import React from 'react'
import { DndContext } from '@dnd-kit/core'
import store from '../../../store/inventory/inventory-store'

import bagIcon from '../images/bag.png'
import SlotList from './slot-list'
import Equipment from './equipment'
import DragOverlay from './overlay'

export default observer(() => {
  const { onDragStart, onDragEnd, getBagType } = store
  const { setTraidInput, setTraidReady, setTradeFinish } = store
  const { mode, trunkName, tradeName, trunkSize, trade } = store.state
  const bagType = getBagType()
  const bagToSlot = bagType > 1 ? 60 : 55

  return (
    <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <DragOverlay />

      <div className='inventory-page__container container'>
        {mode === 0 && <Equipment />}

        {(mode === 1 || mode === 2) && (
          <div className='inventory trade'>
            <div className='title'>Обмен</div>
            <div className='sub-title'>{tradeName}</div>

            <div className='trade-label'>вы отдаете</div>
            <SlotList fromSlot={301} toSlot={310} skroll={true} />

            <div className='trade-form'>
              <div className='trade-money'>
                <div className='text'>деньги: </div>
                <input
                  className='input'
                  type='number'
                  max='3000'
                  value={trade.input1}
                  onChange={e => setTraidInput(e.target.value)}
                />
              </div>
              <div
                className={
                  trade.isReady1 ? 'readiness readiness-active' : 'readiness'
                }
                onClick={setTraidReady}
              >
                {trade.isReady1 ? 'готов' : 'не готов'}
              </div>
            </div>

            <div className='trade-label'>вы получаете</div>
            <SlotList fromSlot={351} toSlot={360} skroll={true} />

            <div className='trade-form'>
              <div className='trade-money'>
                <div className='text'>деньги: </div>
                <div className='input'>{trade.input2}</div>
              </div>
              <div
                className={
                  trade.isReady2 ? 'readiness readiness-active' : 'readiness'
                }
              >
                {trade.isReady2 ? 'игрок готов' : 'игрок не готов'}
              </div>
            </div>

            <div
              className={
                trade.isFinish
                  ? 'trade-finish trade-finish-active'
                  : 'trade-finish'
              }
              onClick={setTradeFinish}
            >
              Завершить
            </div>
          </div>
        )}

        {mode === 3 && (
          <div className='inventory'>
            <div className='title'>Склад</div>
            <SlotList fromSlot={401} toSlot={500} skroll={true} />
          </div>
        )}

        {mode === 4 && (
          <div className='inventory'>
            <div className='title'>Багажник</div>
            <div className='sub-title'>{trunkName}</div>
            <SlotList fromSlot={601} toSlot={600 + trunkSize} skroll={true} />
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
