import { observer } from 'mobx-react-lite'
import React from 'react'
import store from '../../../store/atm/atm-store'
import { numberWithSpaces, accountNumber } from '../../../services/services'

export default observer(() => {
  const { value, setValue } = store.currentInputData
  const { receiverAccount } = store.state.transferData
  const { setReceiverAccount } = store
  const { currentPage } = store.state

  return (
    <div className='transfer'>
      {currentPage === 'Перевод средств' && (
        <div className='transfer__input-container'>
          <div className='transfer__input-hint'>Введите счет получателя</div>
          <input
            type='text'
            className='transfer__input'
            value={accountNumber(receiverAccount)}
            onChange={e => setReceiverAccount(e.target.value)}
          />
        </div>
      )}

      <div className='transfer__input-container'>
        <div className='transfer__input-hint'>Введите необходимую сумму</div>
        <input
          type='text'
          className='transfer__input'
          value={numberWithSpaces(value)}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </div>
  )
})
