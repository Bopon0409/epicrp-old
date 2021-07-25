import React, { useState } from 'react'
import { observer }        from 'mobx-react-lite'
import store               from '../atm-store'
import MenuIcon            from '../svg/menu-icon'
import cn                  from 'classnames'

export default observer(({ data }) => {
  const { title, text } = data
  const [isHover, setHover] = useState(false)
  const { setCurrentPage } = store
  const active = title !== 'Функция недоступна'
  console.log(title, active)

  return (
    <div
      className={cn('menu__item', active && 'menu__item--active')}
      onClick={() => setCurrentPage(title)}
      onMouseEnter={() => active && setHover(true)}
      onMouseLeave={() => active && setHover(false)}
    >
      <div className='item__title'>{title}</div>
      <div className='item__text'>{text}</div>
      {data.id ? <MenuIcon num={data.id} active={isHover} /> : null}
    </div>
  )
})
