import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../admin-report-store'

export const ReportList = observer(() => {
  const { state: { reportList, blockedList }, setCurrentReport } = store
  return (
    <div className='report-list'>
      <div className='report-list__title'>Список репортов</div>
      <div className='report-list__container'>{
        reportList.map((report) => {
          const handler = () => setCurrentReport(report.id)
          return (
            <div className='report-list__item' key={report.id}>
              <div className='name'>{report.name}</div>
              <div className='rating'>Рейтинг: {report.rating}</div>
              {!blockedList && (
                <div className='button' onClick={handler}>
                  <div className='text'>Посмотреть</div>
                </div>
              )}
            </div>
          )
        })
      }</div>
      <div className='info'>
        <div className='info__item'>Администраторов в сети: 10</div>
        <div className='info__item'>Количество репортов: 50</div>
        <div className='info__item'>Ожидает ответа: 47</div>
        <div className='info__item'>Взято в работу: 3</div>
      </div>
    </div>
  )
})