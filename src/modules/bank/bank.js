import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import store                from './bank-store'
import Menu                 from './components/menu'
import MainPage             from './components/main-page'
import bankLogo             from './images/bank-logo.svg'
import { MyAccount }        from './components/my-account'
import { CardSettings }     from './components/card-settings'
import { Modal }            from './components/modal'
import closeIcon            from './images/close-icon.svg'
import { CreateCard }       from './components/create-card'
import { Insurance }        from './components/insurance'
import { Credit }           from './components/credit'
import { CreditEmpty }      from './components/credit-empty'
import classNames           from 'classnames'

export default observer(() => {
  const { active, currentMainMenuEl, modal, credit } = store.state
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

  console.log(credit)

  return active ? (
    <div className='bank-context'>
      {!modal.active && (
        <div className='bank__close-btn' onClick={store.closeClick}>
          <img src={closeIcon} alt='' />
        </div>
      )
      }
      <div className={bankClasses}>
        <img src={bankLogo} alt='' className='bank__logo' />
        <Menu />
        <div className='bank-wrapper1' />
        <div className='bank-wrapper2' />
        {currentMainMenuEl === 0 && <MainPage />}
        {currentMainMenuEl === 1 && <Insurance />}
        {currentMainMenuEl === 2 && credit !== null && <Credit />}
        {currentMainMenuEl === 2 && credit === null && <CreditEmpty />}
        {currentMainMenuEl === 3 && <MyAccount />}
      </div>

      <CardSettings />
      <Modal />
      <CreateCard />
    </div>
  ) : null
})
