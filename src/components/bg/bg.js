import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import bgStore from '../../store/bg/bg-store.js'

export default observer(() => {
  const { active } = bgStore

  const setBgActive = active => bgStore.setActive(active)

  useEffect(() => {
    const { EventManager } = window
    EventManager.addHandler('setBgActive', setBgActive.bind(this))
    return function cleanup () {
      EventManager.removeHandler('setBgActive')
    }
  })

  const bgStyle = { display: active ? 'block' : 'none' }
  return <div className='background' style={bgStyle}></div>
})
