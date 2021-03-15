import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import bgStore from '../../store/bg/bg-store.js'

export default observer(() => {
  const { active } = bgStore

  const setBgActive = active => bgStore.setActive(active)

  useEffect(() => {
    const { EventManager: em } = window
    em.addHandler('setBgActive', setBgActive)
    return () => {
      em.removeHandler('setBgActive', setBgActive)
    }
  }, [])

  const bgStyle = { display: active ? 'block' : 'none' }
  return <div className='background-test' style={bgStyle}></div>
})
