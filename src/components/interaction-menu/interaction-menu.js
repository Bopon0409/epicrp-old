import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import 'circular-menu/dist/css/circular-menu.css'
import store from '../../store/interaction-menu/interaction-menu-store'

export default observer(() => {
  const { active, currentText } = store.state
  const { setActive } = store

  useEffect(() => {
    const { EventManager: em } = window
    const { setInteractionMenu } = store
    em.addHandler('setInteractionMenu', setInteractionMenu)
    return () => {
      em.removeHandler('setInteractionMenuActive', setInteractionMenu)
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
        <div className='text'>{currentText}</div>
      </div>
    </div>
  )
})
