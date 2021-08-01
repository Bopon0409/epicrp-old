import { observer }    from 'mobx-react-lite'
import { ReportAside } from './report-aside'
import { store }       from '../player-menu-store'
import sendIcon        from '../img/send-icon.svg'
import {
  ReportAdminWaiting, ReportEmptyLabel, ReportRatings
}                      from './report-components'
import classNames      from 'classnames'

export const Report = observer(() => {

  const {
    reportState: { reportData, reportInput, reportStatus },
    setReportInput, reportMsgSend, reportInit, setMenuBlock
  } = store

  const messages = reportData.map((item, i) => {
    const isAdmin = item.type === 'admin_connected' || item.type === 'admin_msg'
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
      case 'player_connected':
      case 'admin_connected':
        const connectedClasses = classNames('connected',
          isAdmin && 'connected--admin'
        )
        return <div className={connectedClasses} key={i}>
          {isAdmin ? 'Администратор' : 'Игрок'} {item.name} подключился к чату
        </div>
      default:
        return null
    }
  })

  return (
    <div className='report'>
      <ReportAside />
      <div className='report__main'>
        <div className='report__container'>
          <div className='report__list' id='player-report-chat'>
            {reportStatus === 'waiting' && <ReportEmptyLabel />}
            {reportStatus !== 'waiting' && (
              <>
                {messages}
                <ReportAdminWaiting />
                <ReportRatings />
              </>
            )}
          </div>
        </div>

        <div className='report__input-container'>
          {reportStatus !== 'closed' ? (
            <>
              <input className='report__input' type='text' value={reportInput}
                onChange={e => setReportInput(e.target.value)}
                onFocus={() => setMenuBlock(true)}
                onBlur={() => setMenuBlock(false)}
                onKeyDown={store.inputKeyPressHandler}
              />

              {reportStatus === 'process' && <img src={sendIcon} alt=''
                className='send-icon' onClick={reportMsgSend} />}
            </>
          ) : null}
        </div>

        {reportStatus === 'waiting' ? (
          <>
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
          </>
        ) : null}
      </div>
    </div>
  )
})