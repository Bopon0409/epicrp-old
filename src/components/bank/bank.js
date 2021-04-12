import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import store from '../../store/bank/bank-store'

import Menu from './modules/menu'

export default observer(() => {
  useEffect(() => {
    const { setActive } = store
    const { EventManager: em } = window
    em.addHandler('bank.toggle', setActive)
    return () => em.removeHandler('bank.toggle', setActive)
  }, [])

  return (
    <div className='bank'>
      <Menu />
      <div className='bank-wrapper1' />
      <div className='bank-wrapper2' />
    </div>
  )
})
