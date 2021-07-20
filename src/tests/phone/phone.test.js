import contacts from './contacts-data.json'
import smsData  from './sms-data.json'

const contactsJson = JSON.stringify(contacts)
const jsonSmsData = JSON.stringify(smsData)

const setActive = active => window.trigger('phone.active', active)
const setContacts = () => window.trigger('phone.contacts', contactsJson)
const setSms = () => window.trigger('phone.sms.set', jsonSmsData)
const addSms = () => window.trigger('phone.sms.add', jsonSmsData[0])
const callDrop = () => window.trigger('phone.call.drop')
const outgoingCallAccept = () => window.trigger('phone.call.outgoing.accept')
const outgoingCallInit = () =>
  window.trigger('phone.call.outgoing.init', '333888333')
const incomingCallInit = () =>
  window.trigger('phone.call.incoming.init', '333888333')

window.test.phone = {
  setActive, setContacts, setSms, addSms, callDrop,
  incomingCallInit, outgoingCallInit, outgoingCallAccept
}