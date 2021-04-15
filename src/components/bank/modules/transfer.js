import React from 'react'
import ToggleBar from './toggle-bar'
import transferIcon from '../images/transfer-icon.svg'

export default function Transfer () {
  return (
    <div className='transfer'>
      <div className='transfer__title'>
        <img src={transferIcon} alt='' className='title__icon' />
        <div className='title__text'>Платежи и переводы</div>
      </div>
      <ToggleBar type='payment-for-services' />
      <ToggleBar type='transfer' />
    </div>
  )
}
