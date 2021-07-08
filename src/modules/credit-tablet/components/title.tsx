import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../credit-tablet-store'

export const Title = observer(() => {
  const { name } = store.state
  return (
    <div className='title'>
      <div className='title__label'>Информация</div>
      <div className='title__name'>{name}</div>
    </div>
  )
})