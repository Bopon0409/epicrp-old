import React          from 'react'
import { observer }   from 'mobx-react-lite'
import { store }      from '../phone-store'
import smsIcon        from '../img/header-sms.svg'
import connectionIcon from '../img/header-connection.svg'

export const Header = observer(() => {
  const { state: { time }, headerName, unreadSms } = store
  return (
    <div className='header'>
      <div className='header__title'>{headerName}</div>
      <div className='header__container'>
        {unreadSms > 0 && <img src={smsIcon} className='icon-sms' alt='' />}
        <img src={connectionIcon} className='icon-connect' alt='' />
        <div className='header__time'>{time}</div>
      </div>
    </div>
  )
})