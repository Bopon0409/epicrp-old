import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../store/inventory/inventory-store'

import Container from './modules/container'
import Indicators from './modules/indicators'
import WeightBar from './modules/weight-bar'
import CloseBtn from './modules/close-btn'

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
      <WeightBar />
      <Indicators />
    </div>
  )
})
