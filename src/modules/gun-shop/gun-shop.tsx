import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { ShopHints }        from '../shop-hints/shop-hints'
import { store }            from './gun-shop-store'
import { Menu }             from './components/menu'
import { Props }            from './components/props'
import { Payment }          from '../payment/payment'
import { Slider }           from './components/slider'
import { Modifications }    from './components/modifications'
import './gun-shop.scss'
import { Cart }             from './components/cart'

export const GunShop = observer(() => {
  useEffect(() => {
    const { EventManager: em } = window
    const { setActive, setData } = store

    em.addHandler('gun-shop.active', setActive)
    em.addHandler('gun-shop.data', setData)
    return () => {
      em.removeHandler('gun-shop.active', setActive)
      em.removeHandler('gun-shop.data', setData)
    }
  })

  const {
    state: { active, money, businessNum }, payAction, currentPrice, setModal
  } = store

  return active ? (
    <div className='gun-shop'>
      <Menu />
      <Props />
      <Slider />
      <Modifications />
      <Payment money={money} price={currentPrice}
        payAction={payAction} blocked={currentPrice === 0} />
      <div className='title'>
        <div className='title__num'>#{businessNum}</div>
        <div className='title__name'>Магазин оружия</div>
      </div>
      <div className='cart-btn' onClick={() => setModal(true)}>
        <div className='text'>Корзина</div>
      </div>
      <Cart />
      <ShopHints />
    </div>
  ) : null
})