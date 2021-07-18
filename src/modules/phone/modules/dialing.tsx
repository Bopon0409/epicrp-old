import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../phone-store'

export const Dialing = observer(() => {
  const { dialingNumber } = store.state

  const view = dialingNumber.split(' ').map((num) =>
    <span className='dialing__num'>{num}</span>
  )

  return <div className='dialing'>{view}</div>
})