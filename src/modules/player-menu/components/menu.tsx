import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../player-menu-store'
import classNames   from 'classnames'

export const Menu = observer(() => {
  const { setMenuEl, state: { currentMenuEl } } = store
  const list = ['Статистика', 'FAQ', 'Репорт', 'Донат', 'Квесты', 'Настройки']
  return (
    <div className='menu'>
      <div className='menu__button'>
        <div className='text'>Q</div>
      </div>
      <div className='menu__container'>{
        list.map((item, i) => {
          const classes = classNames('menu__item',
            currentMenuEl === i && 'menu__item--active'
          )
          return (
            <div className={classes} onClick={() => setMenuEl(i)} key={i}>
              {item}
            </div>
          )
        })
      }</div>
      <div className='menu__button'>
        <div className='text'>E</div>
      </div>
    </div>
  )
})