import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './clothes-shop-store'
import './clothes-shop.scss'

export const ClothesShop = observer(() => {
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const { setActive, setData } = store

    em.addHandler('clothes-shop.active', setActive)
    em.addHandler('clothes-shop.data', setData)
    return () => {
      em.removeHandler('clothes-shop.active', setActive)
      em.removeHandler('clothes-shop.data', setData)
    }
  }, [])

  console.log(store.state)

  return store.state.active ? (
    <div className='clothes-shop'>

    </div>
  ) : null
})