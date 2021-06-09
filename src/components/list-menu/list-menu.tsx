import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './list-menu-store'
import './list-menu.scss'

export const ListMenu = observer(() => {
  const { clickHandler, state: { active } } = store

  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const { openMenu, closeMenu } = store

    em.addHandler('list-menu.open', openMenu)
    em.addHandler('list-menu.close', closeMenu)
    return () => {
      em.removeHandler('list-menu.open', openMenu)
      em.removeHandler('list-menu.close', closeMenu)
    }
  })

  const list = store.state.list.map((item, i) => (
    <div className='menu__button' key={i}
      onClick={() => clickHandler(item.value)}>
      <div className='text'>{item.text}</div>
    </div>)
  )

  return active ? (
    <div className='list-menu'>
      <div className='menu'>
        <div className='menu__title'>Выход</div>
        <div className='menu__list'>{list}</div>
        <div className='menu__button--cancel'
          onClick={() => clickHandler('close')}>
          <div className='text'>Отмена</div>
        </div>
      </div>
    </div>
  ) : null
})