import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import store                from './atm-store'
import AtmHeader            from './modules/atm-header'
import AtmBody              from './modules/atm-body'
import { CardChoice }       from './modules/card-choice'

import bg           from './images/atm-bg.png'
import { EnterPin } from './modules/enterPin'

export default observer(() => {
  const { active, currentCard, access } = store.state

  useEffect(() => {
    const { EventManager: em } = window
    const { setActive, setData } = store
    em.addHandler('atm.active', setActive)
    em.addHandler('atm.data', setData)
    return () => {
      em.removeHandler('atm.active', setActive)
      em.removeHandler('atm.data', setData)
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
