import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../credit-tablet-store'

export const Actions = observer(() => {
  const { state: { input }, setInput, request, setModal } = store

  return (
    <div className='actions'>
      <div className='actions__title'>Действия</div>
      <input type='number' className='actions__input' value={input.toString()}
        onChange={setInput} placeholder='Введите сумму кредита' />
      <div className='buttons'>
        <div className='button' onClick={() => setModal(true)}>
          <div className='button__text'>Выбор имущества</div>
          <div className='button__line' />
        </div>
        <div className='button' onClick={request}>
          <div className='button__text'>Отправить заявку</div>
          <div className='button__line' />
        </div>
      </div>
    </div>
  )
})