import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import store                from '../fraction-store'
import ContextIcon          from './context-icon'
import classNames           from 'classnames'

export default observer(() => {
  const { active, id, xCord, yCord } = store.state.contextMenu

  useEffect(() => {
    const { clickOutsideContextMenu: handler } = store
    document.addEventListener('click', handler, false)
    return () => document.removeEventListener('click', handler, false)
  }, [])

  const mainMenu = store.context.main.map(el => (
    <div
      className='menu__item'
      key={`context ${el.title}`}
      onClick={() => el.handler && el.handler(id)}
    >
      <div className='item__icon'>
        <ContextIcon icon={el.title} />
      </div>
      <div className='item__text'>{el.title}</div>
    </div>
  ))

  const style = {
    display: active ? 'flex' : 'none',
    left: xCord,
    top: yCord
  }

  console.log(store.context.second)

  return (
    <div className='context-menu' style={style}>
      {store.context.main.length ? <div className='main-menu'>
        <div className='wrapper'>{mainMenu}</div>
      </div> : null}
      {store.context.second.length ?
        <div className='secondary-menu'>
          <div className='wrapper'>{
            store.context.second.map((el, i) => {
              const { rankName, groupName, color, handler, active } = el
              const content = rankName || groupName
              const checkboxClasses = classNames(
                'item__checkbox',
                active && 'item__checkbox-active'
              )

              return (
                <div className='menu__item checkbox__item' key={i}
                  onClick={handler}>
                  {color
                    ? <div style={{ background: color }} className='color' />
                    : null}
                  <div className='item__text'>{content}</div>
                  <div className={checkboxClasses}>
                  </div>
                </div>
              )
            })

          }</div>
        </div> : null}
    </div>
  )
})
