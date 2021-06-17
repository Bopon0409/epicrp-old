import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store } from '../admin-store';

export const KillLog = observer(() => {
  const LOGS = store.state.killLogs;
  return (
    <div className='kill-log'>
      <div className='kill-log__list'>
        {
          LOGS.map((log, id) => {
            return(
              <div className='kill-log__list-log'>
                <span>{log.name1}</span>
                <span>|</span>
                <span className='orange'>{log.action}</span>
                <span>|</span>
                <span>{log.name2}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
})