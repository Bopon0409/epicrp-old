import React        from 'react'
import { observer } from 'mobx-react-lite'

export const Header = observer(() => {
  return (
    <div className='header'>
      <img src='' alt='' className='header__logo' />
      <div className='header__title'>Полицейский департамент Лос Сантос</div>
      <div className='header__time'>23:30</div>
      <div className='header__button'>На смене</div>
      <div className='header__button'>CODE - 0</div>
      <div className='header__button'>Сигнал 100</div>
    </div>
  )
})