import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../store/atm/atm-store'
import { formatNum } from '../../../services/services'

export default observer(() => {
  const { value, setValue } = store.currentInputData
  const { receiverAccount } = store.state.transferData
  const { setReceiverAccount, transferSubmitBtn } = store
  const { currentPage } = store.state

  return (
    <div className='transfer'>
      {currentPage === 'Перевод средств' && (
        <div className='transfer__input-container'>
          <div className='transfer__input-hint'>Введите счет получателя</div>
          <input
            type='text'
            className='transfer__input'
            value={receiverAccount}
            onChange={e => setReceiverAccount(e.target.value)}
          />
        </div>
      )}

      <div className='transfer__input-container'>
        <div className='transfer__input-hint'>Введите необходимую сумму</div>
        <input
          type='text'
          className='transfer__input'
          value={formatNum(value, ' ')}
          onChange={e => setValue(e.target.value)}
        />
      </div>

      <div className='transfer__submit-btn'>{transferSubmitBtn}</div>
    </div>
  )
})
