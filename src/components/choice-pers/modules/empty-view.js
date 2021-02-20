import React from 'react'
import addPersIcon from '../images/add-pers.svg'

export default function emptyView () {
  return (
    <div className='empty-slot'>
      <img src={addPersIcon} alt='' className='icon' />
      <div className='text'>Создать персонажа</div>
    </div>
  )
}
