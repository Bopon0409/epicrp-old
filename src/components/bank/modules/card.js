import React from 'react'

export default function Card () {
  return (
    <div className='card-wrapper'>
      <div className='card'>
        <img src='' alt='' className='card__refresh-icon' />
        <div className='card__balance-text'>Текущий баланс</div>
        <div className='card__balance'>152000</div>
        <div className='card__id'>**** **** **** 0000</div>
      </div>
      <div className='card__num-text'>Личный счёт</div>
      <div className='card__num'>147832575</div>
    </div>
  )
}
