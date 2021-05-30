import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../bank-store'
import SubMenuItemSvg from '../svg/sub-menu-item-svg'

export default observer(() => {
  const menu = ['Информация', 'Платежи и переводы', 'Выписка по счёту']
  const { currentSubMenuEl } = store.state
  const { setCurrentSubMenuEl } = store

  return (
    <div className='sub-menu'>
      {menu.map((el, i) => (
        <div
          key={i}
          className={
            currentSubMenuEl === i
              ? 'sub-menu__item sub-menu__item_active'
              : 'sub-menu__item'
          }
          onClick={() => setCurrentSubMenuEl(i)}
        >
          <div className='sub-menu__icon-wrapper'>
            <SubMenuItemSvg active={currentSubMenuEl === i} num={i + 1} />
          </div>
          <div className='sub-menu__title'>{el}</div>
        </div>
      ))}
    </div>
  )
})
