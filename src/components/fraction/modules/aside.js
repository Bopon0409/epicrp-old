import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'
import Icon from './icon'

export default observer(() => {
  const menuList = [0, 1, 2, 3, 4].map(num => {
    const { title, icon } = store.getMenuItem(num)
    const active = store.state.activeMenuItem === num
    const clickHandler = () => store.setActiveMenuItem(num)

    return (
      <div className='menu__item' key={num} onClick={clickHandler}>
        <Icon icon={icon} active={active} size={12} />
        <div className='menu__title'>{title}</div>
      </div>
    )
  })

  return (
    <div className='aside'>
      <div className='menu'>{menuList}</div>
    </div>
  )
})
