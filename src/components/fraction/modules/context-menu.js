import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'
import ContextIcon from './context-icon'

export default observer(() => {
  const { active, id, xCoord, yCoord } = store.state.contextMenu

  useEffect(() => {
    const сlickOutside = e => {
      const modalBlock = document.getElementsByClassName('main-menu')[0]
      if (!e.path.includes(modalBlock)) store.setContextMenu(false, 0, 0, 0)
    }
    document.addEventListener('click', сlickOutside, false)
    return () => document.removeEventListener('click', сlickOutside, false)
  }, [])

  const mainMenuList = store.contextMenusItems.map(({ title, handler }) => (
    <div
      className='main-menu__item'
      key={`context ${title}`}
      onClick={() => handler(id)}
    >
      <div className='item__icon'>
        <ContextIcon icon={title} />
      </div>
      <div className='item__text'>{title}</div>
    </div>
  ))

  return (
    <div
      className='context-menu'
      style={{ display: active ? 'block' : 'none' }}
    >
      <div className='main-menu' style={{ left: xCoord, top: yCoord }}>
        {mainMenuList}
      </div>
      <div className='secondary-menu'></div>
    </div>
  )
})
