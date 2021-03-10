import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import SlotPers from './modules/slot-pers'
import choisePersStore from '../../store/choise-pers/choise-pers-store'

import playBtnIcon from './images/play-btn-icon.svg'

export default observer(() => {
  const { componentActive, persData } = choisePersStore.store

  useEffect(() => {
    const { setChoicePersActive, pushPersData } = choisePersStore
    const { EventManager } = window
    EventManager.addHandler('setChoicePersActive', setChoicePersActive)
    EventManager.addHandler('pushPersData', pushPersData)

    return () => {
      EventManager.removeHandler('setChoicePersActive')
      EventManager.removeHandler('pushPersData')
    }
  })

  const slotList = persData.map((_el, i) => <SlotPers key={i} index={i} />)

  const componentStyle = { display: componentActive ? 'block' : 'none' }
  return (
    <div style={componentStyle} className='choice-pers'>
      <div className='title'>
        <span className='first'>Выбор</span>
        <span className='second'>Персонажа</span>
      </div>
      <div className='play-btn'>
        <img src={playBtnIcon} alt='' className='play-icon' />
        <div className='text'>Играть</div>
      </div>
      <div className='slots'>{slotList}</div>
    </div>
  )
})
