import React, { useEffect, useState } from 'react'
import { observer }                   from 'mobx-react-lite'
import store                          from './inventory-store'

import Container      from './components/container'
import Indicators     from './components/indicators'
import RightWeightBar from './components/right-weight-bar'
import CloseBtn       from './components/close-btn'
import Modal          from './components/modal'
import LeftWeightBar  from './components/left-weight-bar'

export default observer(() => {
  const [active, setActive] = useState(false)
  const [mode, setMode] = useState(0)

  useEffect(() => {
    const { EventManager: em } = window
    const { setInventoryData, dropReady, cleanInventory } = store

    em.addHandler('inventory.update', setInventoryData)
    em.addHandler('inventory.drop-ready', dropReady)
    em.addHandler('inventory.active', setActive)
    em.addHandler('inventory.mode', setMode)
    em.addHandler('inventory.clear', cleanInventory)

    return () => {
      em.removeHandler('inventory.update', setInventoryData)
      em.removeHandler('inventory.drop-ready', dropReady)
      em.removeHandler('inventory.active', setActive)
      em.removeHandler('inventory.mode', setMode)
      em.removeHandler('inventory.clear', cleanInventory)
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
