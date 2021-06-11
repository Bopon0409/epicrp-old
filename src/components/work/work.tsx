import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './work-store'
import './work.scss'

export const Work = observer(() => {
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const { setActive, setData } = store

    em.addHandler('work.active', setActive)
    em.addHandler('work.data', setData)
    return () => {
      em.removeHandler('work.active', setActive)
      em.removeHandler('work.data', setData)
    }
  })

  return (
    <div className='work'>
      <div className='container'>

      </div>
    </div>
  )
})