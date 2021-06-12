import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../taxi-tablet-store'

export const OrderList = observer(() => {
  const { orders } = store.state

  const orderList = orders.map((order) => (
    <div className='order'>
      <div className='order__value'>
        {order.client}
        <span className='time'>{order.time}</span>
      </div>
      <div className='order__value'>{order.comment}</div>
      <div className='order__value'>{order.distance}</div>
      <div className='order__button'>
        <div className='text'>Принять</div>
      </div>
    </div>
  ))

  return (
    <div className='order-list'>
      <div className='page-title'>Список заказов</div>
      <div className='order-list'>
        {orders.length ? (
          <>
            <div className='order--head'>
              <div className='order__value'>Заказчик</div>
              <div className='order__value'>Комментарий</div>
              <div className='order__value'>Расстояние до клиента</div>
            </div>
            {orderList}
          </>
        ) : (
          <div className='orders--empty'>На данный момент заказов нет</div>
        )}
      </div>
    </div>
  )
})