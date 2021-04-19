import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import MenuIcon from '../svg/menu-icon'
import store from '../../../store/atm/atm-store'

export default observer(({ data: { title, text, id } }) => {
  const [isHover, setHover] = useState(false)
  const { setCurrentPage } = store
  return (
    <div
      className='menu__item'
      onClick={() => setCurrentPage(title)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className='item__title'>{title}</div>
      <div className='item__text'>{text}</div>
      <MenuIcon num={id} active={isHover} />
    </div>
  )
})
