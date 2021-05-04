import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import store from './fraction-store'

import Header from './modules/header'
import Aside from './modules/aside'
import Body from './modules/body'
import BottomMenu from './modules/bottom-menu'
import Title from './modules/title'

export default observer(() => {
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

  const style = { display: store.state.active ? 'block' : 'none' }

  return (
    <div className='fraction' style={style}>
      <div className='fraction__wrapper'>
        <Title />
        <Header />
        <Aside />
        <Body />
        <BottomMenu />
      </div>
    </div>
  )
})
