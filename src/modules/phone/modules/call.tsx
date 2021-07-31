import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../phone-store'
import moment       from 'moment'

export const Call = observer(() => {
  const { curCall, callNum, callDuration, callError } = store.state
  const isIncoming = curCall === 'incoming-process' ||
    curCall === 'incoming-wait'
  const isProcess = curCall === 'incoming-process' || curCall ===
    'outgoing-process'

  const title = isIncoming ? 'Входящий вызов' : 'Исходящий вызов'
  const timer = moment(callDuration * 1000).format('mm:ss')

  return (
    <div className='call'>
      {curCall === 'call-error' ? (
        <div className='call__error'>{callError}</div>
      ) : (
        <>
          <div className='call__title'>{title}</div>
          <div className='call__num'>{callNum}</div>
          <div className='call__timer'>{isProcess && timer}</div>
        </>
      )}
    </div>
  )
})