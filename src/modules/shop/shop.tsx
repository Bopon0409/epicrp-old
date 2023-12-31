import React, { useEffect } from 'react'
import { store }            from './shop-store'
import { Aside }            from './components/aside'
import { CartLabel } from './components/cart-label'
import { Container } from './components/container'
import { observer }  from 'mobx-react-lite'
import './shop.scss'

export const Shop = observer(() => {
  useEffect(() => {
    const { EventManager: em } = window
    const { setActive, setData, clearCart } = store

    em.addHandler('shop.active', setActive)
    em.addHandler('shop.data', setData)
    em.addHandler('shop.cart.clear', clearCart)
    return () => {
      em.removeHandler('shop.active', setActive)
      em.removeHandler('shop.data', setData)
      em.removeHandler('shop.cart.clear', clearCart)
    }
  }, [])

  return store.state.active ? (
    <div className='shop'>
      <Aside />
      <CartLabel />
      <Container />
    </div>
  ) : null
})