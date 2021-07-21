import contacts from './contacts-data.json'
import smsData  from './sms-data.json'

const contactsJson = JSON.stringify(contacts)
const jsonSmsData = JSON.stringify(smsData)

const setActive = active => window.trigger('phone.active', active)
const setContacts = () => window.trigger('phone.contacts.set', contactsJson)
const addContact = () => window.trigger('phone.contacts.add', contactsJson[0])
const editContact = () => window.trigger('phone.contacts.edit', contactsJson[0])
const setSms = () => window.trigger('phone.sms.set', jsonSmsData)
const addSms = () => window.trigger('phone.sms.add', jsonSmsData[0])
const callDrop = () => window.trigger('phone.call.drop')
const callError = () => window.strTrigger('phone.call.error', 'Ошибочка')
const outgoingCallAccept = () => window.trigger('phone.call.outgoing.accept')
const outgoingCallInit = () =>
  window.strTrigger('phone.call.outgoing.init', '333888333')
const incomingCallInit = () =>
  window.strTrigger('phone.call.incoming.init', '333888333')

window.test.phone = {
  setActive, setContacts, addContact, editContact, setSms, addSms,
  incomingCallInit, outgoingCallInit, outgoingCallAccept, callDrop, callError
}