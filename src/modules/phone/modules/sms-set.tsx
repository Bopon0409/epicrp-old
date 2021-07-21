import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../phone-store'

export const SmsSet = observer(() => {
  const { curSms, smsInput, newSmsContact } = store.state
  const { setSmsInput, setSmsContact } = store

  return (
    <div className='sms-set'>
      {curSms === 'sms-set-new' && (
        <input autoFocus type='text' className='sms-set__contact'
          value={newSmsContact} onChange={setSmsContact}
          placeholder='Введите номер получателя' />
      )}
      <textarea autoFocus={curSms !== 'sms-set-new'} className='sms-set__input'
        value={smsInput} onChange={setSmsInput}>
        Введите текст сообщения
      </textarea>
    </div>
  )
})