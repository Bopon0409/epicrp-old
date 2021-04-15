import React from 'react'

export default function EmptyCard() {
  return (
    <div className='card-wrapper'>
          <div className='card_empty'>
            <img src='' alt='' className='card__empty-icon' />
          </div>
          <div className='card__empty-text'>Личный счёт</div>
        </div>
  )
}
