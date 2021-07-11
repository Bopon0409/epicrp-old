import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../bank-store'

export const Credit = observer(() => {
  const { rate, sum, paymentTime } = store.state.credit
  const paymentSum = store.getCreditPayment(rate, paymentTime, sum)
  return (
    <div className='credit'>
      <div className='credit__title'>Ваш кредит</div>
      <div className='credit__info'>
        <div className='credit__field'>Процентная ставка</div>
        <div className='credit__value'>{rate}%</div>
        <div className='credit__field'>Сумма кредита</div>
        <div className='credit__value'>${sum}</div>
        <div className='credit__field'>Срок платежа</div>
        <div className='credit__value'>{paymentTime} дней</div>
        <div className='credit__field'>Сумма платежа</div>
        <div className='credit__value'>{paymentSum}</div>
        <div className='credit__field'>Оплата</div>
        <div className='credit__value'>Ежедневно</div>
      </div>
    </div>
  )
})