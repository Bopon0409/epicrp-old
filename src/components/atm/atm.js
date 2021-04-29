import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import store from './atm-store'
import AtmHeader from './modules/atm-header'
import AtmBody from './modules/atm-body'

import bg from './images/atm-bg.png'

export default observer(() => {
  const style = { display: store.state.active ? 'block' : 'none' }

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

  return (
    <div className='atm' style={style}>
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
  )
})
