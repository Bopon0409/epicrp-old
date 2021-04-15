import { observer } from 'mobx-react-lite'
import React from 'react'
import SubMenu from './sub-menu'
import store from '../../../store/bank/bank-store'
import Control from './control'
import Transfer from './transfer'

export default observer(() => {
  const { currentSubMenuEl } = store.state
  return (
    <div className='main-page'>
      <div className='main-page__welcome'>
        <div className='main-page__welcome_first'>С возвращением,</div>
        <div className='main-page__welcome_second'>{store.state.userName}</div>
      </div>

      {currentSubMenuEl === 0 && <Control />}
      {currentSubMenuEl === 1 && <Transfer />}
      <SubMenu />
    </div>
  )
})
