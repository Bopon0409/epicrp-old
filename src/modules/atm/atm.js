import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import store          from './atm-store'
import AtmHeader      from './components/atm-header'
import AtmBody        from './components/atm-body'
import { CardChoice } from './components/card-choice'
import bg             from './images/atm-bg.png'
import { EnterPin }   from './components/enterPin'

export default observer(() => {
  const { active, currentCard, access } = store.state

  useEffect(() => {
    const { EventManager: em } = window
    const { setActive, setData, pinEnterSuccess, pinEnterError } = store
    em.addHandler('atm.active', setActive)
    em.addHandler('atm.data', setData)
    em.addHandler('atm.enter.success', pinEnterSuccess)
    em.addHandler('atm.enter.error', pinEnterError)
    return () => {
      em.removeHandler('atm.active', setActive)
      em.removeHandler('atm.data', setData)
      em.removeHandler('atm.enter.success', pinEnterSuccess)
      em.removeHandler('atm.enter.error', pinEnterError)
    }
  }, [])

  return active ? (
    <div className='atm'>
      <div className='atm__wrapper1' />
      <div className='atm__wrapper2' />
      <div className='atm__bg-container'>
        {currentCard === null && <CardChoice />}
        <img src={bg} alt='' className='atm__bg' />
        <div className='atm-inner'>
          {currentCard !== null && !access ? <EnterPin /> : null}
          {currentCard !== null && access ? (
            <>
              <AtmHeader />
              <AtmBody />
            </>
          ) : null}
        </div>
      </div>
    </div>
  ) : null
})
