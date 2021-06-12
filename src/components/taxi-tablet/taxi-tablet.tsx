import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './taxi-tablet-store'
import './taxi-tablet.scss'
import { Aside }            from './modules/aside'

export const TaxiTablet = observer(() => {

  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const { setActive, setData, setActiveOrder, adOrder, removeOrder } = store

    em.addHandler('taxi.active', setActive)
    em.addHandler('taxi.data', setData)
    em.addHandler('taxi.start', setActiveOrder)
    em.addHandler('taxi.order.ad', adOrder)
    em.addHandler('taxi.order.remove', removeOrder)
    return () => {
      em.removeHandler('taxi.active', setActive)
      em.removeHandler('taxi.data', setData)
      em.removeHandler('taxi.start', setActiveOrder)
      em.removeHandler('taxi.order.ad', adOrder)
      em.removeHandler('taxi.order.remove', removeOrder)
    }
  }, [])

  return store.state.active ? (
    <div className='taxi-tablet'>
      <Aside />
    </div>
  ) : null
})