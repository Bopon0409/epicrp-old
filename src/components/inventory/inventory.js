import React, { useEffect, useState } from 'react'
import { observer }                   from 'mobx-react-lite'
import store                          from './inventory-store'

import Container      from './modules/container'
import Indicators     from './modules/indicators'
import RightWeightBar from './modules/right-weight-bar'
import CloseBtn       from './modules/close-btn'
import Modal          from './modules/modal'
import LeftWeightBar  from './modules/left-weight-bar'

export default observer(() => {
  const [active, setActive] = useState(false)
  const [mode, setMode] = useState(0)

  useEffect(() => {
    const { EventManager: em } = window
    const { setInventoryData, getState } = store

    em.addHandler('inventory.update', setInventoryData)
    em.addHandler('inventory.active', setActive)
    em.addHandler('inventory.mode', setMode)
    em.addHandler('inventory.state', getState)
    return () => {
      em.removeHandler('inventory.update', setInventoryData)
      em.removeHandler('inventory.active', setActive)
      em.removeHandler('inventory.mode', setMode)
      em.removeHandler('inventory.state', getState)
    }
  }, [])

  return (
    <div className='inventory-page'
      style={{ display: active ? 'block' : 'none' }}>
      <div className='inventory-page__wrapper' />
      <Container mode={mode} />
      <CloseBtn />
      <RightWeightBar />
      <LeftWeightBar mode={mode} />
      <Indicators />
      {store.state.modal.isActive && <Modal />}
    </div>
  )
})
