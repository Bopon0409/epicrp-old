import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { ShopHints }        from '../shop-hints/shop-hints'
import { store }            from './gun-shop-store'
import { Menu }             from './components/menu'
import { Props }            from './components/props'
import { Payment }          from '../payment/payment'
import './gun-shop.scss'

export const GunShop = observer(() => {
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const { setActive, setData } = store

    em.addHandler('gun-shop.active', setActive)
    em.addHandler('gun-shop.data', setData)
    return () => {
      em.removeHandler('gun-shop.active', setActive)
      em.removeHandler('gun-shop.data', setData)
    }
  })

  const { currentPrice, state: { money, businessNum }, payAction } = store

  return (
    <div className='gun-shop'>
      <Menu />
      <Props />
      <Payment money={money} price={currentPrice}
        payAction={payAction} blocked={currentPrice === 0} />
      <div className='title'>
        <div className='title__num'>#{businessNum}</div>
        <div className='title__name'>Магазин оружия</div>
      </div>
      <ShopHints />
    </div>
  )
})