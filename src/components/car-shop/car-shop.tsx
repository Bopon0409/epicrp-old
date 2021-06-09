import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './car-shop-store'
import { CarList }          from './modules/car-list'
import { CarProps }         from './modules/car-props'
import { ColorBar }         from './modules/color-bar'
import { Hints }            from './modules/hints'
import { Title }            from './modules/title'
import { Payment }          from '../payment/payment'
import './car-shop.scss'

export const CarShop = observer(() => {
  const { state: { money }, currentCar, payAction } = store

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
      <CarList />
      <aside className='aside'>
        <CarProps />
        <ColorBar main={[]} additional={[]} />
      </aside>
      <Hints />
      <Title />
      <Payment money={money} price={currentCar?.price} payAction={payAction} />
    </div>
  )
})