import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../bank-store'
import { formatNum, formatCardNumber } from '../../../services/services'
import numIcon from '../images/account-num-icon.svg'

export default observer(({ account, id: accountId }) => {
  const { balance, name, id, num } = account
  const { setCurrentAccount } = store
  const { currentAccount } = store.state
  return (
    <div
      className={
        currentAccount === accountId
          ? 'card-wrapper card-wrapper_active'
          : 'card-wrapper'
      }
      onClick={() => setCurrentAccount(accountId)}
    >
      <div className='card'>
        <img src='' alt='' className='card__refresh-icon' />
        <div className='card__balance-text'>Текущий баланс</div>
        <div className='card__balance'>$ {formatNum(balance, ',')}</div>
        <div className='card__id'>{formatCardNumber(id)}</div>
      </div>
      <div className='card__num-hint'>{name}</div>
      <div className='card__num-container'>
        <img src={numIcon} alt='' className='card__num-icon' />
        <div className='card__num-text'>{num}</div>
      </div>
    </div>
  )
})
