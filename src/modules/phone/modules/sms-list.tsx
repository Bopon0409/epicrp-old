import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../phone-store'
import newIcon      from '../img/sms-list-new.svg'
import cn           from 'classnames'

export const SmsList = observer(() => {
  const { correspondence, state: { currentSms } } = store

  const newClasses = cn('sms-new__icon',
    currentSms === -1 && 'sms-new__icon--active'
  )

  return (
    <div className='sms-list'>
      <div className='sms-new'>
        <img src={newIcon} alt='' className={newClasses} />
        <div className='sms-new__text'>Новое сообщение</div>
      </div>
      <div className='sms-list__container'>{
        correspondence.map((item, i) => {
          const classes = cn('item', currentSms === i && 'item--active')
          const lastItem = item.smsList[item.smsList.length - 1]

          return (
            <div className={classes}>
              <div className='item__name'>{item.name}</div>
              <div className='item__time'>{lastItem.time}</div>
              <div className='item__time'>{lastItem.text}</div>
            </div>
          )
        })
      }</div>
    </div>
  )
})