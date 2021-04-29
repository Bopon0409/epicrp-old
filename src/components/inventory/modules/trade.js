import { observer } from 'mobx-react-lite'
import React from 'react'
import store from '../inventory-store'
import SlotList from './slot-list'

export default observer(() => {
  const { setTraidInput, setTraidReady, setTradeFinish } = store
  const { trade } = store.state

  return (
    <div className='inventory trade'>
      <div className='title'>Обмен</div>
      <div className='sub-title'>{trade.tradeName}</div>

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
          trade.isFinish ? 'trade-finish trade-finish-active' : 'trade-finish'
        }
        onClick={setTradeFinish}
      >
        Завершить
      </div>
    </div>
  )
})
