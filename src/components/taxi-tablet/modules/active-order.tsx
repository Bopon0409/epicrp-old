import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../taxi-tablet-store'

export const ActiveOrder = observer(() => {
  const { state: { activeOrder }, orderTimeString, rejectOrder } = store
  if (!activeOrder) return null

  const {
    client, addressFrom, addressTo, distance, rating, taximeter
  } = activeOrder

  return (
    <div className='active-order'>
      <div className='page-title'>Активный заказ</div>
      <div className='active-order__subtitle'>Информация</div>

      <div className='active-order__info'>
        <div className='active-order__field'>Клиент</div>
        <div className='active-order__value'>{client}</div>
        <div className='active-order__field'>Рейтинг клиента</div>
        <div className='active-order__value'>{rating}</div>
        <div className='active-order__field'>Расстояние до клиента</div>
        <div className='active-order__value'>{distance}</div>
        <div className='active-order__field'>Начальный адрес</div>
        <div className='active-order__value'>{addressFrom}</div>
        <div className='active-order__field'>Конечный адрес</div>
        <div className='active-order__value'>{addressTo}</div>
        <div className='active-order__field'>В пути</div>
        <div className='active-order__value'>{orderTimeString}</div>
        <div className='active-order__field'>Таксометр</div>
        <div className='active-order__value'>{taximeter}</div>
      </div>

      <div className='active-order__reject-btn' onClick={rejectOrder}>
        <div className='text'>Отказаться</div>
      </div>
    </div>
  )
})