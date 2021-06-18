import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }    from './car-shop-store'
import { CarList }  from './components/car-list'
import { CarProps } from './components/car-props'
import { ColorBar } from './components/color-bar'
import { Hints }    from './components/hints'
import { Title }    from './components/title'
import { Payment }  from '../payment/payment'
import colors               from './colors.json'
import './car-shop.scss'

export const CarShop = observer(() => {
  const { state: { money, active }, currentCar, payAction } = store

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

  return active ? (
    <div className='car-shop'>
      <CarList />
      <Hints />
      <Title />

      {currentCar ? (<>
        <aside className='aside'>
          <CarProps />
          <ColorBar main={colors.main} additional={colors.additional} />
        </aside>
        <Payment money={money} price={currentCar?.price}
          payAction={payAction} />
      </>) : null}

    </div>
  ) : null
})