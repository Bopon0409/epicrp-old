import React, { useState } from 'react'
import { observer }        from 'mobx-react-lite'
import store               from './house-store'
import HouseInside         from './modules/houseInside'
import HouseOutside        from './modules/houseOutside'
import Garage              from './modules/garage'
import Header              from './modules/header'
import Roommates           from './modules/roommates'

export default observer(() => {
  const { mode } = store.state

  useState(() => {
    const { EventManager: em } = window
    em.addHandler('house.mode', store.setMode)
    em.addHandler('house.data', store.setData)
    return () => {
      em.removeHandler('house.mode', store.setMode)
      em.removeHandler('house.data', store.setData)
    }
  }, [])

  const currentPage = () => {
    switch (mode) {
      case 1:
        return <HouseOutside />
      case 2:
        return <HouseInside />
      case 3:
        return <Garage />
      case 4:
        return <Roommates />
      default:
        return null
    }
  }

  return mode ? (
    <div className='house'>
      <Header />
      {currentPage()}
    </div>
  ) : null
})