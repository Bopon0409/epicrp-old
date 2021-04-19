import { observer } from 'mobx-react-lite'
import React from 'react'
import numIcon from '../images/account-num-icon.svg'
import store from '../../../store/bank/bank-store'

export default observer(({ data }) => {
  const list = data.map(({ num, balance }, i) => (
    <div
      className={
        store.state.currentAccount === i
          ? 'side-bar__item'
          : 'side-bar__item side-bar__item_disabled'
      }
      key={i}
      onClick={() => store.setCurrentAccount(i)}
    >
      <div className='item__title-container'>
        <img src={numIcon} alt='' className='side-bar__title-icon' />
        <div className='item__title'>{num}</div>
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