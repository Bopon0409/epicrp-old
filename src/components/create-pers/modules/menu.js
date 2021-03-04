import React from 'react'
import menuIcon from '../images/menu-icon.svg'

export default function Menu ({ menuActive, setMenuActive }) {
  const titles = ['Форма лица', 'Особенности кожи', 'Глаза', 'Волосы', 'Одежда']

  const list = titles.map((title, i) => (
    <div
      key={i}
      className={
        i + 1 === menuActive ? 'menu__item menu__item_active' : 'menu__item'
      }
      onClick={() => setMenuActive(i + 1)}
    >
      <div className='menu__text'>{title}</div>
      <img src={menuIcon} alt='' className='menu__arrow-icon' />
    </div>
  ))

  return <div className='menu'>{list}</div>
}
