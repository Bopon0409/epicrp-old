import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './car-shop-store'

export const CarShop = observer(() => {
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const { setActive, setData } = store

    em.addHandler('car-shop.active', setActive)
    em.addHandler('car-shop.data', setData)
    return () => {
      em.removeHandler('car-shop.active', setActive)
      em.removeHandler('car-shop.data', setData)
    }
  }, [])

  return (
    <div className='car-shop'>

    </div>
  )
})