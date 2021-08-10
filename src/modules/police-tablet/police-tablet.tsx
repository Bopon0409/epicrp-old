import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './police-tablet-store'
import './police-tablet.scss'

export const PoliceTablet = observer(() => {
  useEffect(() => {
    const { EventManager: em } = window
    const { setActive } = store

    em.addHandler('police-tablet.active', setActive)

    return () => {
      em.removeHandler('police-tablet.active', setActive)
    }
  }, [])

  return store.state.active ? (
    <div className='police-tablet'>

    </div>
  ) : null
})