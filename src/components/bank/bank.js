import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import store                from './bank-store'
import Menu                 from './modules/menu'
import MainPage             from './modules/main-page'
import bankLogo             from './images/bank-logo.svg'
import { MyAccount }        from './modules/my-account'
import { CardSettings }     from './modules/card-settings'
// import closeIcon from './images/close-icon.svg'

export default observer(() => {
  const { active, currentMainMenuEl } = store.state

  useEffect(() => {
    const { setActive, updateData } = store
    const { EventManager: em } = window
    em.addHandler('bank.toggle', setActive)
    em.addHandler('bank.update', updateData)
    return () => {
      em.removeHandler('bank.toggle', setActive)
      em.removeHandler('bank.update', updateData)
    }
  }, [])

  return active ? (
    <div className='bank'>
      <img src={bankLogo} alt='' className='bank__logo' />
      <Menu />
      <div className='bank-wrapper1' />
      <div className='bank-wrapper2' />
      {/* <div className='bank__close-btn'>
       <img src={closeIcon} alt='' />
       </div> */}
      {currentMainMenuEl === 0 && <MainPage />}
      {currentMainMenuEl === 3 && <MyAccount />}
      <CardSettings />
    </div>
  ) : null
})
