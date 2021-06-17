import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../admin-store'

export const AdminLog = observer(() => {
  const { adminLogs } = store.state

  return (
    <div className='admin-log'>
      <div className='admin-log__list'>{
        adminLogs.map((log, i) =>
          <div className='admin-log__list-log' key={i}>
            <span>{log.name1}</span>
            <span>|</span>
            <span className='orange'>{log.action}</span>
            <span>|</span>
            <span>{log.name2}</span>
          </div>
        )}
      </div>
    </div>
  )
})