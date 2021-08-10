import React        from 'react'
import { observer } from 'mobx-react-lite'

export const CloseBtn = observer(() => {
  return (
    <div className='close-btn'>
      <div className='close-btn__label'>ESC</div>
      <div className='close-btn__text'>Закрыть</div>
    </div>
  )
})