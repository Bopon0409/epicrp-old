import React        from 'react'
import { observer } from 'mobx-react-lite'

export const Exit = observer(() => {
  return (
    <div className='exit'>
      <div className='menu'>
        <div className='menu__title'>Выход</div>
        <div className='menu__button'>Выйти на улицу</div>
        <div className='menu__button'>Войти в гараж</div>
        <div className='menu__button menu__button--cancel'>Отмена</div>
      </div>
    </div>
  )
})