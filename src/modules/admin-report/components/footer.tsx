import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../admin-report-store'
import sendIcon     from '../img/send-icon.svg'

export const Footer = observer(() => {
  const {
    setInput, reportInit, reportClose, adminSendMsg, adminAction, reportExit,
    state: { input, status, currentReportId }
  } = store
  return currentReportId ? (
    <div className='footer'>
      {status === 'process' && (
        <div className='input__container'>
          <input type='text' className='input' value={input}
            onChange={e => setInput(e.target.value)} />
          <img src={sendIcon} alt='' className='input__icon'
            onClick={adminSendMsg} />
        </div>
      )}

      <div className='buttons'>
        {status === 'process' && (
          <>
            <div className='button' onClick={() => adminAction('tp-to')}>
              <div className='text'>ТП к игроку</div>
            </div>
            <div className='button' onClick={() => adminAction('tp-here')}>
              <div className='text'>ТП к себе</div>
            </div>
            <div className='button' onClick={() => adminAction('recon')}>
              <div className='text'>Войти в рекон</div>
            </div>
            <div className='button'>
              <div className='text'>История наказаний</div>
            </div>
          </>
        )}

        {status === 'list' && (
          <div className='button button--green' onClick={reportInit}>
            <div className='text'>Войти в чат</div>
          </div>
        )}

        {status === 'process' && (
          <div className='button button--red' onClick={reportClose}>
            <div className='text'>Закрыть репорт</div>
          </div>
        )}
      </div>

      {status === 'process' && (
        <div className='button button--exit' onClick={reportExit}>
          <div className='text'>Выйти из чата</div>
        </div>
      )}
    </div>
  ) : null
}
)