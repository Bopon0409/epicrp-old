import { observer } from 'mobx-react-lite'
import React from 'react'
import atmLogo from '../images/atm-logo.svg'
import balanceLogo from '../images/balance-logo.svg'
import store from '../../../store/atm/atm-store'
import { numberWithDott } from '../../../services/services'

export default observer(() => {
  const { balance } = store.state
  return (
    <div className='atm__header'>
      <img src={atmLogo} alt='' className='header__logo' />

      <div className='header__balance-container'>
        <div className='header__balance-text'>
          Баланс:
          <span className='balance-num'>{numberWithDott(balance)} $</span>
        </div>
        <img src={balanceLogo} alt='' className='header__balance-logo' />
      </div>
    </div>
  )
})
