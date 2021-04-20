import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../store/create-pers/create-pers-store'
import menuIcon from '../images/menu-icon.svg'

export default observer(() => {
  const titles = ['Форма лица', 'Особенности кожи', 'Глаза', 'Волосы', 'Одежда']
  const { menuActive } = store.state
  const { setMenuActive } = store

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
})
