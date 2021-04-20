import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../store/atm/atm-store'
import { formatNum } from '../../../services/services'
import atmLogo from '../images/atm-logo.svg'
import balanceLogo from '../images/balance-logo.svg'

export default observer(() => {
  const { balance } = store.state
  return (
    <div className='atm__header'>
      <img src={atmLogo} alt='' className='header__logo' />

      <div className='header__balance-container'>
        <div className='header__balance-text'>
          Баланс:
          <span className='balance-num'>{formatNum(balance, '.')} $</span>
        </div>
        <img src={balanceLogo} alt='' className='header__balance-logo' />
      </div>
    </div>
  )
})
