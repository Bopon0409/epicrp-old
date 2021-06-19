import React           from 'react'
import { observer }    from 'mobx-react-lite'
import { ReportAside } from './report-aside'

export const Report = observer(() => {
  return (
    <div className='report'>
      <ReportAside />
    </div>
  )
})