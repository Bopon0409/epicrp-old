import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../bank-store'
import MainMenuItemSvg from '../svg/main-menu-item-svg'

export default observer(() => {
  const menu = ['Главное меню', 'Страхование', 'Кредитование', 'Мой аккаунт']
  const { currentMainMenuEl } = store.state
  const { setCurrentMainMenuEl } = store

  return (
    <div className='main-menu'>
      {menu.map((el, i) => (
        <div
          key={i}
          className={
            currentMainMenuEl === i
              ? 'main-menu__item main-menu__item_active'
              : 'main-menu__item'
          }
          onClick={() => setCurrentMainMenuEl(i)}
        >
          <MainMenuItemSvg active={currentMainMenuEl === i} num={i + 1} />
          <div className='main-menu__title'>{el}</div>
        </div>
      ))}
    </div>
  )
})
