import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../fraction-store'

export default observer(() => {
  return (
    <div className='fraction__title'>
      <div className='fraction__title-text'>{store.tabletTitle}</div>
    </div>
  )
})
