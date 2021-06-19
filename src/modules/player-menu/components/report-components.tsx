import React          from 'react'
import { observer }   from 'mobx-react-lite'
import Loader         from 'react-loader-spinner'
import { store }      from '../player-menu-store'
import { RatingStar } from '../img/rating-star'

export const ReportRatings = observer(() => {
  const stars = [1, 2, 3, 4, 5]
  const { reportStatus, reportRatings } = store.reportState

  return reportStatus === 'closed' ? (
    <div className='report__ratings'>
      <div className='label'>Администратор Ched Nocksfeel закрыл обращение</div>
      <div className='stars__container'>{
        stars.map((star, i) => (
          <RatingStar active={star <= reportRatings} num={star} key={i} />
        ))
      }</div>
      <div className='label'>Пожалуйста оцените работу администратора</div>
    </div>
  ) : null
})

export const ReportAdminWaiting = observer(() => {
  return store.reportState.reportAdminName ? (
    <div className='report__admin-waiting'>
      <div className='text'>Ожидаем администратора</div>
      <Loader type='Puff' color='#F2C94C' height={20} width={20} />
    </div>
  ) : null
})

export const ReportEmptyLabel = () => {
  return (
    <div className='report__empty-label'>
      Опишите суть вашей проблемы или вопрос
    </div>
  )
}
