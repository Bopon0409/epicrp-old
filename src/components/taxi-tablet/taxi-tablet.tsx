import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './taxi-tablet-store'
import './taxi-tablet.scss'

export const TaxiTablet = observer(() => {

  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const { setActive, setData, setActiveOrder, adOrder, removeOrder } = store

    em.addHandler('taxi.open', setActive)
    em.addHandler('taxi.close', setData)
    em.addHandler('taxi.start', setActiveOrder)
    em.addHandler('taxi.order.ad', adOrder)
    em.addHandler('taxi.order.remove', removeOrder)
    return () => {
      em.removeHandler('taxi.open', setActive)
      em.removeHandler('taxi.close', setData)
      em.removeHandler('taxi.start', setActiveOrder)
      em.removeHandler('taxi.order.ad', adOrder)
      em.removeHandler('taxi.order.remove', removeOrder)
    }
  }, [])

  return (
    <div className='taxi-tablet'>

    </div>
  )
})