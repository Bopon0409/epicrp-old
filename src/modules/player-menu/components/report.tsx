import React           from 'react'
import { observer }    from 'mobx-react-lite'
import { ReportAside } from './report-aside'
import { store }       from '../player-menu-store'
import sendIcon        from '../img/send-icon.svg'
import {
  ReportAdminWaiting, ReportEmptyLabel, ReportRatings
}                      from './report-components'

export const Report = observer(() => {

  const {
    reportState: { reportData, reportInput, reportStatus },
    setReportInput, reportMsgSend, reportInit
  } = store

  const messages = reportData.map((item, i) => {
    switch (item.type) {
      case 'player_msg':
      case 'admin_msg':
        const msgClasses = item.type === 'admin_msg' ?
          'msg msg--admin' : 'msg msg--player'
        return (
          <div className={msgClasses} key={i}>
            <div className='msg__name'>{item.name}</div>
            <div className='msg__text'>{item.msg}</div>
            <div className='msg__time'>{item.time}</div>
          </div>
        )
      case 'player_connected':
      case 'admin_connected':
        const connectedClasses = item.type === 'admin_connected' ?
          'connected connected--admin' : 'connected connected--player'
        return <div className={connectedClasses} key={i}>{item.name}</div>
    }
  })

  console.log(reportStatus)

  return (
    <div className='report'>
      <ReportAside />
      <div className='report__main'>
        <div className='report__container'>
          {reportStatus === 'waiting' && <ReportEmptyLabel />}
          {reportStatus !== 'waiting' && (
            <>
              <div className='messages'>{messages}</div>
              <ReportAdminWaiting />
              <ReportRatings />
            </>
          )}
        </div>

        <div className='report__input-container'>
          {reportStatus !== 'closed' ? (
            <>
              <input className='report__input' type='text' value={reportInput}
                onChange={e => setReportInput(e.target.value)} />

              {reportStatus === 'process' && <img src={sendIcon} alt=''
                className='send-icon' onClick={reportMsgSend} />}
            </>
          ) : <div className='disable'>Недоступно</div>}
        </div>

        <div className='report__buttons'>
          <div className='report__button report__button--complaint'
            onClick={() => reportInit('report')}>
            <div className='text'>Отправить жалобу</div>
          </div>

          <div className='report__button report__button--question'
            onClick={() => reportInit('question')}>
            <div className='text'>Задать вопрос</div>
          </div>
        </div>
      </div>
    </div>
  )
})