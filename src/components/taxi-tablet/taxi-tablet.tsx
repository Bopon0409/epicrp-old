import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './taxi-tablet-store'
import './taxi-tablet.scss'
import { Aside }            from './modules/aside'
import { OrderList }        from './modules/order-list'
import { ActiveOrder }      from './modules/active-order'
import { Reject }           from './modules/reject'
import { RejectNext }       from './modules/reject-next'

export const TaxiTablet = observer(() => {
  const { active, tabletStatus } = store.state

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

  const currentPage = () => {
    switch (tabletStatus) {
      case 'list':
        return <OrderList />
      case 'order':
        return <ActiveOrder />
      case 'reject':
        return <Reject />
      case 'reject-next':
        return <RejectNext />
    }
  }

  return active ? (
    <div className='taxi-tablet'>
      <Aside />
      {currentPage()}
    </div>
  ) : null
})