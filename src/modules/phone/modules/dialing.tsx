import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../phone-store'

export const Dialing = observer(() => {
  return <div className='dialing'>
    <div className='dialing__num'>{store.state.dialingNumber}</div>
  </div>
})