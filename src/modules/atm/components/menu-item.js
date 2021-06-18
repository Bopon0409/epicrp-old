import React, { useState } from 'react'
import { observer }        from 'mobx-react-lite'
import store               from '../atm-store'
import MenuIcon            from '../svg/menu-icon'

export default observer(({ data }) => {
  const { title, text } = data
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
      {data.id ? <MenuIcon num={data.id} active={isHover} /> : null}
    </div>
  )
})
