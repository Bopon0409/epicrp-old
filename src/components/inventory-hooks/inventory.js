import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../store/inventory/inventory-store'

import Container from './modules/container'
import Indicators from './modules/indicators'
import WeightBar from './modules/weight-bar'
import CloseBtn from './modules/close-btn'

export default observer(() => {
  const { active } = store.state

  useEffect(() => {
    const { EventManager: em } = window
    const { setInventoryActive, setInventoryData } = store
    em.addHandler('pushInventaryDataToFront', setInventoryData)
    em.addHandler('setInventoryActive', setInventoryActive)
    return () => {
      em.removeHandler('pushInventaryDataToFront', setInventoryData)
      em.removeHandler('setInventoryActive', setInventoryActive)
    }
  }, [])

  const inventoryStyle = active ? { display: 'block' } : { display: 'none' }

  return (
    <div className='inventory-page' style={inventoryStyle}>
      <div className='inventory-page__wrapper' />
      <Container />
      <CloseBtn />
      <WeightBar />
      <Indicators />
    </div>
  )
})
