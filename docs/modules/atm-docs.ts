export interface AtmDocs {
  // Ввод пин-кода
  'atm.enter.pin': [cardNumber: string, pin: string]
  // Снятие наличных
  'atm.enter.take': [cardNumber: string, cash: number]
  // Пополнение счета
  'atm.enter.put': [cardNumber: string, cash: number]
  // Оплата телефона
  'atm.enter.pay.phone': [cardNumber: string, cash: number]
  // Оплата бизнеса
  'atm.enter.pay.business': [cardNumber: string, businessId: string, cash: number]
  // Оплата дома
  'atm.enter.pay.house': [cardNumber: string, houseId: string, cash: number]
  // Перевод на счёт
  'atm.enter.transfer': [cardNumber: string, receiverAccount: string, cash: number]
  // Выход из банкомата
  'atm.exit': []
}