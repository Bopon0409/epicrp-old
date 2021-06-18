import React from 'react'
import addPersIcon from '../images/add-pers.svg'

export default function emptyView () {
  const clickHandler = () => window.frontTrigger('character.create-start')
  return (
    <div className='empty-slot' onClick={clickHandler}>
      <img src={addPersIcon} alt='' className='icon' />
      <div className='text'>Создать персонажа</div>
    </div>
  )
}
