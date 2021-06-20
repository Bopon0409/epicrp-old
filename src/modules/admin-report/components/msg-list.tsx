import React             from 'react'
import { observer }      from 'mobx-react-lite'
import { store }         from '../admin-report-store'
import classNames        from 'classnames'
import { PlayerRatings } from './player-rating'

export const MsgList = observer(() => {
  const { currentReport } = store
  return (
    <div className='msg-list'>
      <div className='report__list'>
        {currentReport?.msgList.map((item, i) => {
          const isAdmin = item.type === 'admin_msg'
          switch (item.type) {
            case 'player_msg':
            case 'admin_msg':
              const msgClasses = classNames('msg', isAdmin && 'msg--admin')
              return (
                <div className={msgClasses} key={i}>
                  <div className='msg__name'>{item.name}</div>
                  <div className='msg__text'>{item.msg}</div>
                  <div className='msg__time'>Отправлено в {item.time}</div>
                </div>
              )
            default:
              return null
          }
        })}
        <PlayerRatings key={10000} />
      </div>
    </div>
  )
})