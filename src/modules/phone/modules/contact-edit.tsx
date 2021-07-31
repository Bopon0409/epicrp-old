import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../phone-store'
import cn           from 'classnames'

export const ContactEdit = observer(() => {
  const {
    state: {
      contactNumInput, contactNameInput, curContacts, contactEditButton
    },
    setEditContactNum, setEditContactName
  } = store

  const removeActive = contactEditButton === 'remove'

  return (
    <div className='contact-edit'>
      <input type='text' className='name' placeholder='Введите имя'
        value={contactNameInput} onChange={setEditContactName} />
      <input type='number' className='num' placeholder='Введите номер'
        value={contactNumInput} onChange={setEditContactNum} />

      {curContacts === 'contacts-edit' && (
        <div className='buttons'>
          <div className={cn('button', !removeActive && 'button--active')}>
            <div className='text'>Сохранить контакт</div>
          </div>
          <div className={cn('button', removeActive && 'button--active')}>
            <div className='text'>Удалить контакт</div>
          </div>
        </div>
      )}
    </div>
  )
})