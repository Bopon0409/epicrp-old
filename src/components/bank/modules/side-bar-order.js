import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../bank-store'
import numIcon from '../images/account-num-icon.svg'

export default observer(({ data }) => {
  const list = data.map(({ accountId, balance }) => (
    <div
      className={
        store.state.currentAccount === accountId
          ? 'side-bar__item'
          : 'side-bar__item side-bar__item_disabled'
      }
      key={accountId}
      onClick={() => store.setCurrentAccount(accountId)}
    >
      <div className='item__title-container'>
        <img src={numIcon} alt='' className='side-bar__title-icon' />
        <div className='item__title'>{accountId}</div>
      </div>
      <div className='item__value'>{balance}$</div>
    </div>
  ))

  return (
    <div className='side-bar order'>
      <div className='side-bar__title'>Ваши счета</div>
      <div className='side-bar__container'>{list}</div>
    </div>
  )
})
