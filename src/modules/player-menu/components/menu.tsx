import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../player-menu-store'

export const Menu = observer(() => {
  const { setMenuEl } = store
  const list = ['Статистика', 'FAQ', 'Репорт', 'Донат', 'Квесты', 'Настройки']
  return (
    <div className='menu'>
      <div className='menu__button'>
        <div className='text'>Q</div>
      </div>
      <div className='menu__container'>{
        list.map((item, i) => (
          <div className='menu__item' onClick={() => setMenuEl(i)} key={i}>
            {item}
          </div>
        ))
      }</div>
      <div className='menu__button'>
        <div className='text'>E</div>
      </div>
    </div>
  )
})