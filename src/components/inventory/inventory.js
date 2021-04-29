import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import store from './inventory-store'

import Container from './modules/container'
import Indicators from './modules/indicators'
import RightWeightBar from './modules/right-weight-bar'
import CloseBtn from './modules/close-btn'
import Modal from './modules/modal'
import LeftWeightBar from './modules/left-weight-bar'

export default observer(() => {
  useEffect(() => {
    const { EventManager: em } = window
    const { setInventoryActive, setInventoryData } = store
    em.addHandler('inventory.update', setInventoryData)
    em.addHandler('inventory.toggle', setInventoryActive)
    return () => {
      em.removeHandler('inventory.update', setInventoryData)
      em.removeHandler('inventory.toggle', setInventoryActive)
    }
  }, [])

  return (
    <div
      className='inventory-page'
      style={{ display: store.state.active ? 'block' : 'none' }}
    >
      <div className='inventory-page__wrapper' />
      <Container />
      <CloseBtn />
      <RightWeightBar />
      <LeftWeightBar />
      <Indicators />
      {store.state.modal.isActive && <Modal />}
    </div>
  )
})
