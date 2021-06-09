import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './list-menu-store'
import './list-menu.scss'

export const ListMenu = observer(() => {
  const { clickHandler } = store

  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const { setActive, setData, setTitle } = store

    em.addHandler('list-menu.active', setActive)
    em.addHandler('list-menu.data', setData)
    em.addHandler('list-menu.title', setTitle)
    return () => {
      em.removeHandler('list-menu.active', setActive)
      em.removeHandler('list-menu.data', setData)
      em.removeHandler('list-menu.title', setTitle)
    }
  })

  const list = store.state.data.map((item, i) => (
    <div className='menu__button' key={i}
      onClick={() => clickHandler(item.value)}>
      <div className='text'>{item.text}</div>
    </div>)
  )
  return (
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
  )
})