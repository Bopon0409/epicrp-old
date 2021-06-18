import React from 'react'
import buySlotIcon from '../images/buy-slot.svg'

export default function buyView () {
  return (
    <div className='empty-slot'>
      <img src={buySlotIcon} alt='' className='icon' />
      <div className='text'>Купить дополнительный слот</div>
    </div>
  )
}
