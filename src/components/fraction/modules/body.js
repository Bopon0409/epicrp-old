import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'
import Info from './info'

export default observer(() => {
  const getCurrentBlock = () => {
    switch (store.state.activeMenuItem) {
      case 0:
        return <Info />
      default:
        return null
    }
  }

  return <div className='body'>{getCurrentBlock()}</div>
})
