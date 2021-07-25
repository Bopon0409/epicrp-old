export interface BankDocs {
  // Выход из банка
  'bank.exit': []

  // Создание карты
  'bank.card.create': [name: string, pin: string]
  // Смена названия карты
  'bank.card.name': [accountId: string, name: string]
  // Смена пин-кода карты
  'bank.card.pin': [accountId: string, pin: string]
  // Восстановление карты
  'bank.card.recovery': [accountId: string]
  // Удаление карты
  'bank.card.remove': [accountId: string]

  // Пополнение счёта
  'bank.top_up': [accountId: string, sum: number]
  // Обналичивание счёта
  'bank.cash_out': [accountId: string, sum: number]
  // Оплата имущества
  'bank.payment_for_property': [accountId: string, sum: number]
  // Оплата телефона
  'bank.payment_phone': [accountId: string, sum: number]
  // Перевод на личный счёт
  'bank.transfer_private': [
    accountId: string, accountReceiver: string, sum: number
  ]
  // Перевод на счёт организации
  'bank.transfer_organization': [
    accountId: string, accountReceiver: string, sum: number
  ]
}