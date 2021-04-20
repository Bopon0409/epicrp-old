import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../store/bank/bank-store'
import SubMenu from './sub-menu'
import Control from './control'
import Transfer from './transfer'
import Order from './order'

export default observer(() => {
  const { currentSubMenuEl, accountsData } = store.state
  return (
    <div className='main-page'>
      {store.state.userName && (
        <div className='main-page__welcome'>
          <div className='main-page__welcome_first'>С возвращением,</div>
          <div className='main-page__welcome_second'>
            {store.state.userName}
          </div>
        </div>
      )}

      {currentSubMenuEl === 0 && <Control />}
      {currentSubMenuEl === 1 && <Transfer />}
      {currentSubMenuEl === 2 && <Order />}
      {accountsData.length && <SubMenu />}
    </div>
  )
})
