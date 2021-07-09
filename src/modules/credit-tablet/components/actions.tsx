import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../credit-tablet-store'

export const Actions = observer(() => {
  const { state: { input }, setInput, request, setModal } = store

  return (
    <div className='actions'>
      <div className='actions__title'>Заявка на кредит</div>
      <label htmlFor='input' className='actions__label'>Сумма кредита</label>
      <input type='number' className='actions__input' value={input.toString()}
        onChange={setInput} placeholder='Введите сумму кредита' id='input' />
      <div className='actions__buttons'>
        <div className='credit-tablet-button' onClick={() => setModal(true)}>
          <div className='credit-tablet-button__text'>Выбор имущества</div>
          <div className='credit-tablet-button__line' />
        </div>
        <div className='credit-tablet-button credit-tablet-button--green'
          onClick={request}>
          <div className='credit-tablet-button__text'>Отправить заявку</div>
          <div className='credit-tablet-button__line' />
        </div>
      </div>
    </div>
  )
})