import React          from 'react'
import { observer }   from 'mobx-react-lite'
import store          from '../bank-store'
import closeIcon      from '../images/close-icon.svg'

export const Modal = observer(() => {
  const { type, active, accountInput, sumInput } = store.state.modal
  const {
    number: houseNumber, tax: houseTax, remind: houseRemind
  } = store.state.house
  const { balance = 0, accountId = '' } = store.currentAccountData
  const { number: phoneNumber, remind: phoneRemind } = store.state.phone
  const { title, button } = store.modalText
  const { modalSumChange, modalAccountChange, modalClose, modalSubmit } = store

  return active && (
    <div className='modal-wrapper'>
      <div className='modal'>
        <header className='header'>
          <div className='title'>{title}</div>
          <div className='close-btn' onClick={modalClose}>
            <img src={closeIcon} alt='' />
          </div>
        </header>

        {type === 'modal_top_up' && (
          <div className='body'>
            <div className='modal__info'>
              <div className='hint'>
                Вы собираетесь положить наличные средства в банковский счет
              </div>
            </div>
            <input type='number' className='modal__input'
              value={sumInput.toString()} onChange={modalSumChange}
              placeholder='Введите сумму' />
          </div>
        )}

        {type === 'modal_cash_out' && (
          <div className='body'>
            <div className='modal__info'>
              <div className='hint'>
                Комиссия за обналичивание не взимается
              </div>
            </div>
            <input type='number' className='modal__input'
              value={sumInput.toString()} onChange={modalSumChange}
              placeholder='Введите сумму' />
          </div>
        )}

        {type === 'payment_for_property' && (
          <div className='body'>
            <div className='modal__info'>
              <div className='modal__row'>
                <div className='modal__cell'>Номер дома:</div>
                <div className='modal__cell bold'>{houseNumber}</div>
              </div>
              <div className='modal__row'>
                <div className='modal__cell'>Сумма налога:</div>
                <div className='modal__cell bold'>{houseTax}</div>
              </div>
              <div className='modal__row'>
                <div className='modal__cell'>Остаток дней:</div>
                <div className='modal__cell bold'>{houseRemind}</div>
              </div>
            </div>
            <input type='number' className='modal__input'
              value={sumInput.toString()} onChange={modalSumChange}
              placeholder='Введите сумму' />
          </div>
        )}

        {type === 'payment_phone' && (
          <div className='body'>
            <div className='modal__info'>
              <div className='modal__row'>
                <div className='modal__cell'>Номер телефона:</div>
                <div className='modal__cell bold'>{phoneNumber}</div>
              </div>
              <div className='modal__row'>
                <div className='modal__cell'>Остаток на счету:</div>
                <div className='modal__cell bold'>{phoneRemind}</div>
              </div>
            </div>
            <input type='number' className='modal__input'
              value={sumInput.toString()} onChange={modalSumChange}
              placeholder='Введите сумму' />
          </div>
        )}

        {type === 'transfer_private' && (
          <div className='body'>
            <div className='modal__info'>
              <div className='modal__row'>
                <div className='modal__cell'>Номер счета:</div>
                <div className='modal__cell  bold'>{accountId}</div>
              </div>
              <div className='modal__row'>
                <div className='modal__cell'>Сумма на счету:</div>
                <div className='modal__cell  bold'>{balance}</div>
              </div>
            </div>
            <input type='text' className='modal__input' value={accountInput}
              onChange={e => modalAccountChange(e.target.value)}
              placeholder='Введите номер счета' />
            <input type='number' className='modal__input'
              value={sumInput.toString()} onChange={modalSumChange}
              placeholder='Введите сумму перевода' />
          </div>
        )}

        {type === 'transfer_organization' && (
          <div className='body'>
            <div className='modal__info'>
              <div className='modal__row'>
                <div className='modal__cell'>Номер счета:</div>
                <div className='modal__cell  bold'>{accountId}</div>
              </div>
              <div className='modal__row'>
                <div className='modal__cell'>Сумма на счету:</div>
                <div className='modal__cell  bold'>{balance}</div>
              </div>
            </div>
            <input type='text' className='modal__input' value={accountInput}
              onChange={e => modalAccountChange(e.target.value)}
              placeholder='Введите номер счета' />
            <input type='number' className='modal__input'
              value={sumInput.toString()} onChange={modalSumChange}
              placeholder='Введите сумму перевода' />
          </div>
        )}
      </div>
      <div className='submit-btn' onClick={modalSubmit}>
        <div className='text'>{button}</div>
      </div>
    </div>
  )
})