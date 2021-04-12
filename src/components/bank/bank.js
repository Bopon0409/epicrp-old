import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import store from '../../store/bank/bank-store'

import bankLogo from './images/bank-logo.svg'
import Menu from './modules/menu'
import MainPage from './modules/main-page'

export default observer(() => {
  const { active, currentMainMenuEl } = store.state
  useEffect(() => {
    const { setActive } = store
    const { EventManager: em } = window
    em.addHandler('bank.toggle', setActive)
    return () => em.removeHandler('bank.toggle', setActive)
  }, [])

  return (
    <div className='bank' style={{ display: active ? 'block' : 'none' }}>
      <img src={bankLogo} alt='' className='bank__logo' />
      <Menu />
      <div className='bank-wrapper1' />
      <div className='bank-wrapper2' />

      {currentMainMenuEl === 0 && <MainPage />}
    </div>
  )
})
