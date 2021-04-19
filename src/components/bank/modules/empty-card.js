import React from 'react'
import EmptyCardSvg from '../svg/empty-card'

export default function EmptyCard () {
  return (
    <div className='card-wrapper'>
      <EmptyCardSvg />
      <div className='card__empty-text'>Оформимть новый счет</div>
    </div>
  )
}
