export interface ContractDocs {
  // Подписание страхового договора (клиент)
  'contract.client-insurance': { signature: string }
  // Подписание страхового договора (банк)
  'contract.bank-insurance': { signature: string, tariff: number }
  // Подписание кредитного договора (клиент)
  'contract.client-credit': { signature: string }
  // Подписание кредитного договора (банк)
  'contract.bank-credit': {
    duration: number, propertyId: number | undefined,
    sum: number, creditSum: number, dailyPayment: number
  }
}