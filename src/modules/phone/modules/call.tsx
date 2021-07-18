import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../phone-store'

export const Call = observer(() => {
  const { curCall, callNum, callDuration } = store.state
  const isIncoming = curCall === 'incoming-process' ||
    curCall === 'incoming-wait'
  const isProcess = curCall === 'incoming-process' || curCall ===
    'outgoing-process'

  const title = isIncoming ? 'Входящий вызов' : 'Исходящий вызов'
  const timer = isProcess ? callDuration : null

  return (
    <div className='call'>
      <div className='call__title'>{title}</div>
      <div className='call__num'>{callNum}</div>
      <div className='call__timer'>{timer}</div>
    </div>
  )
})