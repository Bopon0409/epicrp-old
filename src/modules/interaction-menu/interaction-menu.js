import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import store                from './interaction-menu-store'
import './circular-menu.css'

export default observer(() => {
  const { active, currentText } = store.state
  const style = { display: active ? 'block' : 'none' }
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
    <div className='interaction-menu' style={style}>
      <div id='menu1' className='menu1'/>
      <div className='bg-wrap' onClick={() => setActive(false)}/>
      <div className='inner' onClick={() => setActive(false)}>
        <div className='text'>{currentText}</div>
      </div>
    </div>
  )
})
