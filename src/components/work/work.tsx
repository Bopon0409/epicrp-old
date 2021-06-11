import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './work-store'
import './work.scss'
import { Description }      from './modules/description'
import { Stat }             from './modules/stat'
import { Transport }        from './modules/transport'

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

  return store.state.active ? (
    <div className='work'>
      <div className='container'>
        <Description />
        <Stat />
        <Transport />
      </div>
    </div>
  ) : null
})