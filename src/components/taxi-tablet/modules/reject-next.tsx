import React        from 'react'
import { observer } from 'mobx-react-lite'

export const RejectNext = observer(() => {
  return (
    <div className='reject-next'>
      <div className='page-title'>Отказ от заказа</div>
      <div className='reject-next__text'>Вы успешно отказались от заказа!</div>
      <div className='reject-next__question'>Вернуться на линию?</div>
      <div className='button-container'>
        <div className='reject-next__btn reject-next__btn--active'>
          <div className='text'>Да</div>
        </div>
        <div className='reject-next__btn reject-next__btn--inactive'>
          <div className='text'>Да</div>
        </div>
      </div>
    </div>
  )
})