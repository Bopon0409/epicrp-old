import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'
import Info from './info'
import MembersList from './members-list'
import Activity from './activity'

export default observer(() => {
  const getCurrentBlock = () => {
    switch (store.state.activeMenuItem) {
      case 0:
        return <Info />
      case 1:
        return <MembersList />
      case 2:
        return <Activity />
      default:
        return null
    }
  }

  return <div className='body'>{getCurrentBlock()}</div>
})
