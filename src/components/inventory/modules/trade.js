import { observer } from 'mobx-react-lite'
import React        from 'react'
import store        from '../inventory-store'
import SlotList     from './slot-list'
import classNames   from 'classnames'

export default observer(() => {
  const { setTradeInput, setTradeReady, setTradeFinish, setTradeCancel } = store
  const { trade } = store.state

  const finishClasses = classNames('trade-finish',
    trade.isFinish && 'trade-finish-active'
  )
  const readyClasses1 = classNames('readiness',
    trade.isReady1 && 'readiness-active'
  )
  const readyClasses2 = classNames('readiness',
    trade.isReady2 && 'readiness-active'
  )

  return (
    <div className='inventory trade'>
      <div className='title'>Обмен</div>
      <div className='sub-title'>{trade.tradeName}</div>

      <div className='trade-label'>Вы отдаете</div>
      <SlotList fromSlot={301} toSlot={310} scroll={true} />

      <div className='trade-form'>
        <div className='trade-money'>
          <div className='text'>Деньги:</div>
          <input
            className='input' type='text' value={trade.input1}
            onChange={e => setTradeInput(e.target.value)}
          />
        </div>
        <div className={readyClasses1} onClick={setTradeReady}>
          {trade.isReady1 ? 'Готов' : 'Не готов'}
        </div>
      </div>

      <div className='trade-label'>вы получаете</div>
      <SlotList fromSlot={351} toSlot={360} scroll={true} />

      <div className='trade-form second-form'>
        <div className='trade-money'>
          <div className='text'>Деньги:</div>
          <div className='input'>{trade.input2}</div>
        </div>
        <div className={readyClasses2}>
          {trade.isReady2 ? 'Готов' : 'Не готов'}
        </div>
      </div>

      <div className='button__container'>
        <div className={'trade-finish'} onClick={setTradeCancel}>
          Отменить
        </div>
        <div className={finishClasses} onClick={setTradeFinish}>
          Завершить
        </div>
      </div>
    </div>
  )
})
