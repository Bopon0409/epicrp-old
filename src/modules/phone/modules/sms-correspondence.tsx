import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../phone-store'

export const SmsCorrespondence = observer(() => {
  const { correspondence, state: { currentSms, smsInput } } = store
  return (
    <div className='sms-correspondence'>
      <div className='sms-correspondence__container'>{
        correspondence[currentSms].smsList.map((item) => (
          <div className='item'>
            <div className='item__text'>{item.text}</div>
            <div className='item__time'>{item.time}</div>
          </div>
        ))
      }</div>
      <div className='sms-correspondence__input'>{
        smsInput.length > 0 ? smsInput : 'Введите текст сообщения'
      }</div>
    </div>
  )
})