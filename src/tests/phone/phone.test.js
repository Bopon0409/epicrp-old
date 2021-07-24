import contacts from './contacts-data.json'
import smsData  from './sms-data.json'

const contactsJson = JSON.stringify(contacts)
const jsonSmsData = JSON.stringify(smsData)

const setActive = active => window.trigger('phone.active', active)

// Загрузить массив контактов
const setContacts = () => window.trigger('phone.contacts.set', contactsJson)
// Загрузить контакт
const addContact = () => window.trigger('phone.contacts.add', contactsJson[0])
// Изменить контакт
const editContact = () => window.trigger('phone.contacts.edit', contactsJson[0])

// Загрузить массив sms
const setSms = () => window.trigger('phone.sms.set', jsonSmsData)
// Загрузить sms
const addSms = () => window.trigger('phone.sms.add', jsonSmsData[0])

// Сброс звонка
const callDrop = () => window.trigger('phone.call.drop')
// Ошибка звонка (несуществующий номер, например)
const callError = () => window.strTrigger('phone.call.error', 'Ошибочка')

// Принятие исходящего звонка
const outgoingCallAccept = () => window.trigger('phone.call.outgoing.accept')
// Начало исходящего звонка (собеседник взял трубку)
const outgoingCallInit = () =>
  window.strTrigger('phone.call.outgoing.init', '333888333')

// Входящий звонок
const incomingCallInit = () =>
  window.strTrigger('phone.call.incoming.init', '333888333')

window.test.phone = {
  setActive, setContacts, addContact, editContact, setSms, addSms,
  incomingCallInit, outgoingCallInit, outgoingCallAccept, callDrop, callError
}