import React from 'react'
import ToggleBar from './toggle-bar'

export default function Control () {
  return (
    <div className='control'>
      <div className='control-actions'>
        <ToggleBar type='control-actions' />
      </div>

      <div className='control__card-container'>
        <div className='card-wrapper'>
          <div className='card'>
            <img src='' alt='' className='card__refresh-icon' />
            <div className='card__balance-text'>Текущий баланс</div>
            <div className='card__balance'>152000</div>
            <div className='card__id'>**** **** **** 0000</div>
          </div>
        </div>
        <div className='card__num-text'>Личный счёт</div>
        <div className='card__num'>147832575</div>
      </div>

      <div className='card-wrapper'>
        <div className='card_empty'>
          <img src='' alt='' className='card__empty-icon' />
        </div>
        <div className='card__empty-text'>Личный счёт</div>
      </div>
    </div>
  )
}
