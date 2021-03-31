import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../store/bg/bg-store.js'

export default observer(() => {
  useEffect(() => {
    const { EventManager: em } = window
    em.addHandler('hud.toggleBg', store.setActive)
    return () => em.removeHandler('hud.toggleBg', store.setActive)
  }, [])

  const bgStyle = { display: store.active ? 'block' : 'none' }
  return <div className='background-test' style={bgStyle}></div>
})
