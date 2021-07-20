import React         from 'react'
import { observer }  from 'mobx-react-lite'
import { store }     from '../phone-store'
import newIcon       from '../img/sms-list-new.svg'
import newIconActive from '../img/sms-list-new-active.svg'
import cn            from 'classnames'
import moment        from 'moment'

export const SmsList = observer(() => {
  const { correspondence, state: { currentSms } } = store
  const newClasses = cn('sms-new', currentSms === -1 && 'sms-new--active')

  return (
    <div className='sms-list'>
      <div className={newClasses}>
        <img src={currentSms === -1 ? newIconActive : newIcon} alt=''
          className='sms-new__icon' />
        <div className='sms-new__text'>Новое сообщение</div>
      </div>
      <div className='sms-list__container' tabIndex={0} id='phone-sms-list'>{
        correspondence.map((item, i) => {
          const classes = cn('item', currentSms === i && 'item--active')
          const lastItem = item.smsList[item.smsList.length - 1]
          const time = moment(new Date(lastItem.time)).format('mm:ss')

          return (
            <div className={classes} key={i}>
              <div className='item__name'>{item.name}</div>
              <div className='item__time'>{time}</div>
              <div className='item__text'>{lastItem.text}</div>
            </div>
          )
        })
      }</div>
    </div>
  )
})