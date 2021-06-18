import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../bank-store'
import ToggleBar from './toggle-bar'
import SideBarTransfer from './side-bar-transfer'
import transferIcon from '../images/transfer-icon.svg'

export default observer(() => {
  return (
    <>
      <div className='transfer'>
        <div className='transfer__title'>
          <img src={transferIcon} alt='' className='title__icon' />
          <div className='title__text'>Платежи и переводы</div>
        </div>
        <ToggleBar type='payment-for-services' />
        <ToggleBar type='transfer' />
      </div>

      <SideBarTransfer data={store.currentAccountData.operations} />
    </>
  )
})
