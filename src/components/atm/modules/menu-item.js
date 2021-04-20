import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../store/atm/atm-store'
import MenuIcon from '../svg/menu-icon'

export default observer(({ data: { title, text, id } }) => {
  const [isHover, setHover] = useState(false)
  return (
    <div
      className='menu__item'
      onClick={() => store.setCurrentPage(title)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className='item__title'>{title}</div>
      <div className='item__text'>{text}</div>
      <MenuIcon num={id} active={isHover} />
    </div>
  )
})
