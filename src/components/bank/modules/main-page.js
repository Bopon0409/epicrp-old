import { observer } from 'mobx-react-lite'
import React from 'react'
import SubMenu from './sub-menu'
import store from '../../../store/bank/bank-store'

export default observer(() => {
  return (
    <div className='main-page'>
      <div className='main-page__welcome'>
        <div className='main-page__welcome_first'>С возвращением,</div>
        <div className='main-page__welcome_second'>{store.state.userName}</div>
      </div>

      
      <SubMenu />
    </div>
  )
})
