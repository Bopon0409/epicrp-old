import React        from 'react'
import { observer } from 'mobx-react-lite'
import { IMoney }   from './models'
import classNames   from 'classnames'
import { store }    from './payment-store'
import { Select }   from './select'
import selectCaret  from './img/select_caret.svg'
import './payment.scss'

export interface PaymentProps {
  money: IMoney,
  price: number | undefined,
  payAction: (method: 'card' | 'cash', currentCard: string | null) => void
}

export const Payment = observer((props: PaymentProps) => {
  const { money, price, payAction } = props
  const { state: { method, currentCard }, selectToggle, cashHandler } = store

  const cashClasses = classNames('btn', method === 'cash' && 'btn--active')
  const cardClasses = classNames('btn', method === 'card' && 'btn--active')

  return (
    <div className='payment-bar'>
      <Select money={money} />
      <div className={cashClasses} onClick={cashHandler}>
        <div className='text'>Наличкой</div>
      </div>
      <div className={cardClasses} onClick={() => selectToggle(money)}>
        <img src={selectCaret} alt='' className='caret' />
        <div className='text'>Картой</div>
      </div>
      <div className='btn' onClick={() => payAction(method, currentCard)}>
        <div className='text'>Оплатить {price || 0}$</div>
      </div>
    </div>
  )
})