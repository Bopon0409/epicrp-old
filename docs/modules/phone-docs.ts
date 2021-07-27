export interface PhoneDocs {
  // Запрос на исходящий вызов
  'phone.call.outgoing.request': [number: string]
  // Сброс звонка
  'phone.call.drop': []
  // Отправка sms
  'phone.sms.send': [contact: string, smsInput: string]
  // Добавление контакта
  'phone.contact.add': [name: string, number: string]
  // Удаление контакта
  'phone.contact.remove': [contactId: number]
  // Изменение контакта
  'phone.contact.edit': [contactId: number, name: string, number: string]
}