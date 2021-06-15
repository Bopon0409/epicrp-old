import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../taxi-tablet-store'

export const OrderList = observer(() => {
  const { state: { orders }, takeOrder } = store

  const orderList = orders.map((order) => (
    <div className='order' key={order.id}>
      <div className='order__value'>
        {order.client}
        <div className='time'>(Ожидает {order.time})</div>
      </div>
      <div className='order__value'>{order.comment}</div>
      <div className='order__value'>{order.distance}</div>
      <div className='order__button' onClick={() => takeOrder(order.id)}>
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
            <div className='order order--head'>
              <div className='order__value'>Заказчик</div>
              <div className='order__value'>Комментарий</div>
              <div className='order__value'>Расстояние до клиента</div>
              <div className='order__value' />
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