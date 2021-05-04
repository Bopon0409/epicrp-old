import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import './circular-menu.css'
import store from './interaction-menu-store'

export default observer(() => {
  const { active, currentText } = store.state
  const { setActive } = store

  useEffect(() => {
    const { EventManager: em } = window
    const { setInteractionMenu } = store
    em.addHandler('interaction-menu.toggle', setInteractionMenu)
    return () => {
      em.removeHandler('interaction-menu.toggle', setInteractionMenu)
    }
  }, [])

  return (
    <div
      className='interaction-menu'
      style={active ? { display: 'block' } : { display: 'none' }}
    >
      <div id='menu1' className='menu1' />
      <div className='bg-wrap' onClick={() => setActive(false)}></div>
      <div className='inner' onClick={() => setActive(false)}>
        <div
          className='text'
          onClick={() => window.clientTrigger('interact.close')}
        >
          {currentText}
        </div>
      </div>
    </div>
  )
})
