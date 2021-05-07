import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import store from './atm-store'
import AtmHeader from './modules/atm-header'
import AtmBody from './modules/atm-body'

import bg from './images/atm-bg.png'

export default observer(() => {
  useEffect(() => {
    const { EventManager: em } = window
    const { setAtmActive, updateAtmData } = store
    em.addHandler('atm.toggle', setAtmActive)
    em.addHandler('atm.update', updateAtmData)
    return () => {
      em.removeHandler('atm.toggle', setAtmActive)
      em.removeHandler('atm.update', updateAtmData)
    }
  }, [])

  return store.state.active ? (
    <div className='atm'>
      <div className='atm__wrapper1' />
      <div className='atm__wrapper2' />
      <div className='atm__bg-container'>
        <img src={bg} alt='' className='atm__bg' />
        <div className='atm-inner'>
          <AtmHeader />
          <AtmBody />
        </div>
      </div>
    </div>
  ) : null
})
