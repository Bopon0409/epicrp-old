import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './death-menu-store'
import icon                 from './img/icon.svg'
import './death-menu.scss'

export const DeathMenu = observer(() => {
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    em.addHandler('death-menu.open', store.open)
    em.addHandler('death-menu.close', store.close)

    return () => {
      em.removeHandler('death-menu.open', store.open)
      em.removeHandler('death-menu.close', store.close)
    }
  }, [])

  const { state: { seconds, active }, spawn } = store
  return active ? (
    <div className='death-menu'>
      <img src={icon} alt='' className='death-menu__icon' />
      <div className='death-menu__title'>Вы потеряли сознание</div>
      <div className='death-menu__timer'>
        0:{seconds > 10 ? seconds : `0${seconds}`}
      </div>
      <div className='death-menu__buttons'>
        <div className='death-menu__button'
          onClick={() => spawn('hospital')}>
          <div className='text'>Появиться в больнице</div>
        </div>
        <div className='death-menu__button'
          onClick={() => spawn('currentLocation')}>
          <div className='text'>Появиться на месте</div>
        </div>
      </div>
      <div className='death-menu__hint'>* Скорая в разработке</div>
    </div>
  ) : null
})