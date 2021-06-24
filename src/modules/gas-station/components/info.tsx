import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../gas-station-store'

export const Info = observer(() => {
  const { currentFuel } = store
  return (
    <div className='info'>{currentFuel ? (
      <>
        <div className='info__title'>Информация</div>
        <div className='info__text'>{currentFuel?.description}</div>
      </>
    ) : null
    }</div>
  )
})