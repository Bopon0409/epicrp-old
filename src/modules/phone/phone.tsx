import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import './phone.scss'
import { Header }           from './modules/header'
import { Content }          from './modules/content'
import { Footer }           from './modules/footer'
import { ButtonContainer }  from './modules/button-container'
import { store }            from './phone-store'

export const Phone = observer(() => {
  useEffect(() => {
    const { EventManager: em } = window
    const {
      setActive, setContacts, setSms, addSms, callDrop, outgoingCallInit,
      incomingCallInit, outgoingCallAccept, keyHandler, callSetInfo,
      addContact, swapContact
    } = store

    em.addHandler('phone.active', setActive)
    em.addHandler('phone.contacts.set', setContacts)
    em.addHandler('phone.contacts.add', addContact)
    em.addHandler('phone.contacts.edit', swapContact)
    em.addHandler('phone.sms.set', setSms)
    em.addHandler('phone.sms.add', addSms)
    em.addHandler('phone.call.drop', callDrop)
    em.addHandler('phone.call.error', callSetInfo)
    em.addHandler('phone.call.outgoing.init', outgoingCallInit)
    em.addHandler('phone.call.incoming.init', incomingCallInit)
    em.addHandler('phone.call.outgoing.accept', outgoingCallAccept)
    document.addEventListener('keyup', keyHandler)

    return () => {
      em.removeHandler('phone.active', setActive)
      em.removeHandler('phone.contacts', setContacts)
      em.removeHandler('phone.contacts.add', addContact)
      em.removeHandler('phone.contacts.edit', swapContact)
      em.removeHandler('phone.sms.set', setSms)
      em.removeHandler('phone.sms.add', addSms)
      em.removeHandler('phone.call.drop', callDrop)
      em.removeHandler('phone.call.error', callSetInfo)
      em.removeHandler('phone.call.outgoing.init', outgoingCallInit)
      em.removeHandler('phone.call.incoming.init', incomingCallInit)
      em.removeHandler('phone.call.outgoing.accept', outgoingCallAccept)
      document.removeEventListener('keyup', keyHandler)
    }
  }, [])

  return store.state.active ? (
    <div className='phone'>
      <div className='display'>
        <Header />
        <Content />
        <Footer />
      </div>
      <ButtonContainer />
    </div>
  ) : null
})