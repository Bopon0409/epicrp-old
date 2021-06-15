import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../taxi-tablet-store'

export const RejectNext = observer(() => {
  const btnClasses1 = 'reject-next__btn reject-next__btn--active'
  const btnClasses2 = 'reject-next__btn reject-next__btn--inactive'

  const handler1 = () => store.rejectNext(true)
  const handler2 = () => store.rejectNext(false)

  return (
    <div className='reject-next'>
      <div className='page-title'>Отказ от заказа</div>
      <div className='reject-next__text'>Вы успешно отказались от заказа!</div>
      <div className='reject-next__question'>Вернуться на линию?</div>
      <div className='button-container'>
        <div className={btnClasses1} onClick={handler1}>
          <div className='text'>Да</div>
        </div>
        <div className={btnClasses2} onClick={handler2}>
          <div className='text'>Нет</div>
        </div>
      </div>
    </div>
  )
})