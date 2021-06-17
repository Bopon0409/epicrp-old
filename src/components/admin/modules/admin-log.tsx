import React        from 'react';
import { observer } from 'mobx-react-lite';
import { store } from '../admin-store';


export const AdminLog = observer(() => {
  const LOGS = store.state.adminLogs;
  return (
    <div className='admin-log'>
      <div className='admin-log__list'>
        {
          LOGS.map((log, id) => {
            return(
              <div className='admin-log__list-log'>
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