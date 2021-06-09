import React        from 'react'
import { observer } from 'mobx-react-lite'
import { IMoney }   from './models'
import classNames   from 'classnames'
import { store }    from './payment-store'
import { Select }   from './select'

export interface PaymentProps {
  money: IMoney,
  price: number,
  payAction: () => {}
}

export const Payment = observer((props: PaymentProps) => {
  const { money, price, payAction } = props
  const { state: { method }, selectToggle, cashHandler } = store

  const cashClasses = classNames('btn', method === 'cash' && 'btn-active')
  const cardClasses = classNames('btn', method === 'card' && 'btn-active')

  return (
    <div className='payment-bar'>
      <Select money={money} />
      <div className={cashClasses} onClick={cashHandler}>Наличкой</div>
      <div className={cardClasses} onClick={selectToggle}>Картой</div>
      <div className='btn' onClick={payAction}>Оплатить {price}$</div>
    </div>
  )
})