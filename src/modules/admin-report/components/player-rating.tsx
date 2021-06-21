import { observer }   from 'mobx-react-lite'
import { store }      from '../admin-report-store'
import { RatingStar } from './rating-star'
import React          from 'react'

export const PlayerRatings = observer(() => {
  const stars = [1, 2, 3, 4, 5]
  const { status, rating, adminName } = store.state

  return status === 'closed' ? (
    <div className='report__ratings'>
      <div className='label'>Администратор {adminName} закрыл обращение</div>
      <div className='stars__container'>{
        stars.map((star, i) => (
          <RatingStar active={star <= rating} num={star} key={i} />
        ))
      }</div>
      <div className='label'>Пожалуйста оцените работу администратора</div>
    </div>
  ) : null
})