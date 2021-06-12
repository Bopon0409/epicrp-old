import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../taxi-tablet-store'

export const Reject = observer(() => {
  const { state: { rejectReason }, setRejectOrder } = store
  return (
    <div className='reject'>
      <div className='page-title'>Отказ от заказа</div>
      <textarea className='reject__input' value={rejectReason}
        onChange={e => setRejectOrder(e.target.value)} />
      <div className='reject__hint'>(Причина отказа будет указана клиенту)</div>
      <div className='reject__btn'>
        <div className='text'>Отказаться</div>
      </div>
    </div>
  )
})