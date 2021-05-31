import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import store                from './bank-store'
import Menu                 from './modules/menu'
import MainPage             from './modules/main-page'
import bankLogo             from './images/bank-logo.svg'
import { MyAccount }        from './modules/my-account'
import { CardSettings }     from './modules/card-settings'
import { Modal }            from './modules/modal'
import closeIcon            from './images/close-icon.svg'
import { CreateCard }       from './modules/create-card'
import classNames           from 'classnames'

export default observer(() => {
  const { active, currentMainMenuEl } = store.state
  const bankClasses = classNames('bank', store.isBlur && 'bank-blur')

  useEffect(() => {
    const { setActive, setData, pinEnterSuccess, pinEnterError } = store
    const { EventManager: em } = window
    em.addHandler('bank.toggle', setActive)
    em.addHandler('bank.update', setData)
    em.addHandler('bank.pin.success', pinEnterSuccess)
    em.addHandler('bank.pin.error', pinEnterError)
    return () => {
      em.removeHandler('bank.toggle', setActive)
      em.removeHandler('bank.update', setData)
      em.removeHandler('bank.pin.success', pinEnterSuccess)
      em.removeHandler('bank.pin.error', pinEnterError)
    }
  }, [])

  return active ? (
    <div className='bank-context'>
      <div className={bankClasses}>
        <img src={bankLogo} alt='' className='bank__logo' />
        <Menu />
        <div className='bank-wrapper1' />
        <div className='bank-wrapper2' />
        <div className='bank__close-btn' onClick={store.closeBank}>
          <img src={closeIcon} alt='' />
        </div>
        {currentMainMenuEl === 0 && <MainPage />}
        {currentMainMenuEl === 3 && <MyAccount />}
      </div>

      <CardSettings />
      <Modal />
      <CreateCard />
    </div>
  ) : null
})
