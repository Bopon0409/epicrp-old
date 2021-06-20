import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../admin-report-store'

export const Footer = observer(() => {
  const { setInput, state: { input, status, currentReportId } } = store
  return currentReportId ? (
    <div className='footer'>
      {status === 'process' && (
        <input type='text' className='input' value={input}
          onChange={e => setInput(e.target.value)} />
      )}
      <div className='buttons'>
        <div className='button'>
          <div className='text'>ТП к игроку</div>
        </div>
        <div className='button'>
          <div className='text'>ТП к себе</div>
        </div>
        <div className='button'>
          <div className='text'>Войти в рекон</div>
        </div>
        <div className='button'>
          <div className='text'>История наказаний</div>
        </div>

        {status === 'list' && (
          <div className='button button--active'>
            <div className='text'>Войти в чат</div>
          </div>
        )}

        {status === 'list' && (
          <div className='button button--active'>
            <div className='text'>Закрыть репорт</div>
          </div>
        )}
      </div>
    </div>
  ) : null
})