import React from 'react'
import buySlotIcon from '../images/buy-slot.svg'

export default function buyView () {
  const clickHandler = () => window.frontTrigger('character.buy-start')
  return (
    <div className='empty-slot' onClick={clickHandler}>
      <img src={buySlotIcon} alt='' className='icon' />
      <div className='text'>Купить дополнительный слот</div>
    </div>
  )
}
