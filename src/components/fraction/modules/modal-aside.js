import React        from 'react'
import { observer } from 'mobx-react-lite'

export default observer(() => {
  return (
    <aside className='modal__aside'>
      <div className='aside__icon'>
        <div className='text'>С</div>
        <div className='online' />
      </div>
      <div className='aside__name'>Ched Nocksfeel</div>
      <div className='member-info'>
        <div className='row'>
          <div className='cell'>Ранг:</div>
          <div className='cell'>Ched Nocksfeel</div>
        </div>
        <div className='row'>
          <div className='cell'>Отдел:</div>
          <div className='cell'>Ched Nocksfeel</div>
        </div>
        <div className='row'>
          <div className='cell'>Последний вход:</div>
          <div className='cell cell-online'>Сейчас онлайн</div>
        </div>
        <div className='row'>
          <div className='cell'>Выговоров:</div>
          <div className='cell'>1/3</div>
        </div>
      </div>
      <div className='btn'>
        <div className='btn__text'>Выдать выговор</div>
      </div>
    </aside>
  )
})
