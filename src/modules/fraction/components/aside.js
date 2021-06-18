import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'
import Icon from './icon'
import classNames from 'classnames'

export default observer(() => {
  const items = store.state.settingsMode ? [5, 6] : [0, 1, 2, 3, 4]
  const menuList = items.map(num => {
    const { title, icon } = store.getMenuItem(num)
    const active = store.state.activeMenuItem === num
    const clickHandler = () => store.setActiveMenuItem(num)
    const classes = classNames('menu__item', active && 'menu__item_active')

    return (
      <div className={classes} key={num} onClick={clickHandler}>
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
