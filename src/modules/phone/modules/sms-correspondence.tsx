import React          from 'react'
import { observer }   from 'mobx-react-lite'
import { store }      from '../phone-store'
import { scrollList } from '../../../services/services'
import moment         from 'moment'

export const SmsCorrespondence = observer(() => {
  const { correspondence, state: { currentSms, smsInput } } = store
  setTimeout(() => {
    scrollList('sms-correspondence-list')
    document.getElementById('sms-correspondence-list')?.focus()
  }, 10)
  document.addEventListener('click', () =>
    document.getElementById('sms-correspondence-list')?.focus()
  )

  return (
    <div className='sms-correspondence'>
      <div className='sms-correspondence__container scroll'
        id='sms-correspondence-list' tabIndex={0}>{
        correspondence[currentSms].smsList.map((item, i) => (
          <div className={`item item--${item.type}`} key={i}>
            <div className='item__text'>{item.text}</div>
            <div className='item__time'>{
              moment(new Date(item.time)).format('mm:ss')
            }</div>
          </div>
        ))
      }</div>
      <div className='sms-correspondence__input'>
        <div className='text'>{
          smsInput.length > 0 ? smsInput : 'Введите текст сообщения'
        }</div>
      </div>
    </div>
  )
})