import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../bank-store'

export const Insurance = observer(() => {
  const { tariffs, current } = store.state.insurance

  return (
    <div className='insurance'>
      <div className='titles'>
        <div className='title'>Доступные тарифы</div>
        <div className='title'>Мой тарифный план</div>
      </div>
      <div className='tariffs'>{
        tariffs.map((item, i) => (
          <div className='tariffs__item' key={i}>
            <div className='tariffs__percent'>
              <div className='text'>{item.percent}%</div>
            </div>
            <div className='tariffs__info'>
              <div className='tariffs__label'>Тариф</div>
              <div className='tariffs__name'>{item.name}</div>
              <div className='tariffs__price'>${item.price}</div>
            </div>
          </div>
        ))
      }</div>
      {current !== null ? (
        <div className='current'>
          <div className='current__label'>Ваш тариф</div>
          <div className='current__name'>{current.name}</div>
          <div className='current__percent'>{current.percent}%</div>
          <div className='info'>
            <div className='info__item'>
              <div className='info__percent'>{current.med}%</div>
              <div className='info__text'>Скидка на медицинские услуги</div>
            </div>
            <div className='info__item'>
              <div className='info__percent'>{current.veh}%</div>
              <div className='info__text'>
                На ремонт личного транспорта
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='current--empty'>
          <div className='empty-title'>У вас нет страховки</div>
          <div className='empty-btn'>Построить маршрут до ближайшего банка</div>
        </div>
      )}
    </div>
  )
})