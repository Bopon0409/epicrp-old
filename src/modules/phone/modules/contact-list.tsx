import React         from 'react'
import { observer }  from 'mobx-react-lite'
import { store }     from '../phone-store'
import cn            from 'classnames'
import newIcon       from '../img/list-new.svg'
import newIconActive from '../img/list-new-active.svg'
import contactIcon   from '../img/contact-icon.svg'

export const ContactList = observer(() => {
  const { state: { currentContact, contacts } } = store
  const newClasses = cn('contact-new',
    currentContact === -1 && 'contact-new--active'
  )

  const contactList = contacts.map((item, i) => (
    <div className={cn('item',
      currentContact === i && 'item--active'
    )} key={i}>
      <div className='item__img-container'
        style={{ backgroundColor: item.color }}>
        <img src={contactIcon} alt='' className='item__img' />
      </div>
      <div className='item__name'>{item.name}</div>
    </div>
  ))

  return (
    <div className='contact-list'>
      <div className={newClasses}>
        <img src={currentContact === -1 ? newIconActive : newIcon} alt=''
          className='contact-new__icon' />
        <div className='contact-new__text'>Новый контакт</div>
      </div>
      <div className='contact-list__container scroll'
        tabIndex={0} id='phone-contacts-list'>{contactList}</div>
    </div>
  )
})