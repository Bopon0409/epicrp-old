import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../phone-store'

export const SmsSet = observer(() => {
  const { state: { smsInput }, setSmsInput } = store
  return (
    <div className='sms-set'>
      <input type='text' className='sms-set__input' />
      <textarea value={smsInput} onClick={setSmsInput}>
        Введите текст сообщения
      </textarea>
    </div>
  )
})