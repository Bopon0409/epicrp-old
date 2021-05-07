import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import SlotPers from './modules/slot-pers'
import store from './choise-pers-store'
import playBtnIcon from './images/play-btn-icon.svg'

export default observer(() => {
  const { componentActive, data } = store.state

  useEffect(() => {
    const { EventManager: em } = window
    em.addHandler('character.toggleMenu', store.setChoicePers)
    return () => em.removeHandler('character.toggleMenu', store.setChoicePers)
  }, [])

  const slotList = data.map((_el, i) => <SlotPers key={i} index={i} />)

  return componentActive ? (
    <div className='choice-pers'>
      <div className='title'>
        <span className='first'>Выбор</span>
        <span className='second'>Персонажа</span>
      </div>
      <div className='play-btn' onClick={store.clickPlay}>
        <img src={playBtnIcon} alt='' className='play-icon' />
        <div className='text'>Играть</div>
      </div>
      <div className='slots'>{slotList}</div>
    </div>
  ) : null
})
