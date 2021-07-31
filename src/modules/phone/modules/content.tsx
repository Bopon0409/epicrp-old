import React                 from 'react'
import { observer }          from 'mobx-react-lite'
import { store }             from '../phone-store'
import { Index }             from '.'
import { Dialing } from './dialing'
import { Call }    from './call'
import { SmsList } from './sms-list'
import { SmsCorrespondence } from './sms-correspondence'
import { SmsSet }            from './sms-set'
import { ContactList }       from './contact-list'
import { ContactEdit }       from './contact-edit'

export const Content = observer(() => {
  const { curPage, curSms, curContacts } = store.state
  switch (true) {
    case curPage === 'index':
      return <Index />
    case curPage === 'dialing':
      return <Dialing />
    case curPage === 'call':
      return <Call />
    case curPage === 'sms' && curSms === 'sms-list':
      return <SmsList />
    case curPage === 'sms' && curSms === 'sms-correspondence':
      return <SmsCorrespondence />
    case curPage === 'sms' && curSms === 'sms-set':
    case curPage === 'sms' && curSms === 'sms-set-new':
      return <SmsSet />
    case curPage === 'contacts' && curContacts === 'contacts-list':
      return <ContactList />
    case curPage === 'contacts' && curContacts === 'contacts-create':
    case curPage === 'contacts' && curContacts === 'contacts-edit':
      return <ContactEdit />
    default:
      return null
  }
})