import React, { useState, useEffect } from 'react'
import SlotPers from './slot-pers'
import playBtnIcon from './images/play-btn-icon.svg'

export default function ChoicePers () {
  const [componentActive, setComponentActive] = useState(false)
  const [currentPers, setCurrentPers] = useState(0)

  const [persData, setPersData] = useState([])

  const setChoicePersActive = active => setComponentActive(active)
  const pushPersData = data => setPersData(data)

  useEffect(() => {
    window.EventManager.addHandler(
      'setChoicePersActive',
      setChoicePersActive.bind(this)
    )
    window.EventManager.addHandler('pushPersData', pushPersData.bind(this))
    return function cleanup () {
      window.EventManager.removeHandler(
        'setChoicePersActive',
        setChoicePersActive
      )
      window.EventManager.removeHandler('pushPersData', pushPersData)
    }
  })

  const slotList = persData.map((pers, i) => {
    return (
      <SlotPers
        key={i}
        index={i}
        pers={pers}
        active={i === currentPers}
        setCurrentPers={setCurrentPers}
      />
    )
  })

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
}