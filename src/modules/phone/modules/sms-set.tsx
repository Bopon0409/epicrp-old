import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../phone-store'

export const SmsSet = observer(() => {
  const { curSms, smsInput, newSmsContact } = store.state
  const { setSmsInput, setSmsContact } = store
  console.log(curSms)

  return (
    <div className='sms-set'>
      {curSms === 'sms-set-new' && (
        <input type='text' className='sms-set__contact' value={newSmsContact}
          onChange={setSmsContact} placeholder='Введите номер получателя' />
      )}
      <textarea className='sms-set__input' value={smsInput} onChange={setSmsInput}>
        Введите текст сообщения
      </textarea>
    </div>
  )
})