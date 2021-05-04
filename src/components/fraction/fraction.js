import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import store from './fraction-store'

import Header from './modules/header'
import Aside from './modules/aside'
import Body from './modules/body'

export default observer(() => {
  const style = { display: store.active ? 'block' : 'none' }
  useEffect(() => {
    const { EventManager: em } = window
    const { setActive, setData } = store
    em.addHandler('fraction.active', setActive)
    em.addHandler('fraction.data', setData)
    return () => {
      em.removeHandler('fraction.active', setActive)
      em.removeHandler('fraction.data', setData)
    }
  }, [])

  return (
    <div className='fraction' style={style}>
      <div className='fraction__bg-wrapper'>
        <div className='fraction__inner-wrapper'>
          <Header />
          <Aside />
          <Body />
        </div>
      </div>
    </div>
  )
})
