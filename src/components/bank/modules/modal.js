import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../bank-store'
import closeIcon    from '../images/close-icon.svg'

export const Modal = observer(() => {
  const { type, active, accountInput, sumInput } = store.state.modal
  const {
    number: houseNumber, tax, reminder: houseReminder
  } = store.state.house
  const { number: phoneNumber, reminder: phoneReminder } = store.state.phone
  const { title, button } = store.modalText
  return active && (
    <div className='modal-wrapper'>
      <div className='modal'>
        <header className='header'>
          <div className='title'>{title}</div>
          <div className='close-btn'>
            <img src={closeIcon} alt='' />
          </div>
        </header>
        <div className='body'>

          {type === 'payment_for_property' && (
            <div className='modal__info'>
              <div className='modal__row'>
                <div className='modal__cell'>Номер дома:</div>
                <div className='modal__cell'>Номер дома:</div>
              </div>
            </div>
          )}

        </div>
      </div>
      <div className='submit-btn'>
        <div className='text'>{button}</div>
      </div>
    </div>
  )
})