import bankInsuranceData   from './bank-insurance-data.json'
import clientInsuranceData from './client-insurance-data.json'
import bankCreditData      from './bank-credit-data.json'
import clientCreditData    from './client-credit-data.json'

const bankInsuranceJson = JSON.stringify(bankInsuranceData)
const clientInsuranceJson = JSON.stringify(clientInsuranceData)
const bankCreditJson = JSON.stringify(bankCreditData)
const clientCreditJson = JSON.stringify(clientCreditData)

const close = () => window.trigger('contract.close')

// Открыть страховой контракт (для банка)
const openInsuranceBank = () =>
  window.trigger('contract.open.bank.insurance', bankInsuranceJson)
// Открыть страховой контракт (для клиента)
const openInsuranceClient = () =>
  window.trigger('contract.open.client.insurance', clientInsuranceJson)

// Открыть кредитный контракт (для банка)
const openCreditBank = () =>
  window.trigger('contract.open.bank.credit', bankCreditJson)
// Открыть кредитный контракт (для клиента)
const openCreditClient = () =>
  window.trigger('contract.open.client.credit', clientCreditJson)

window.test.contract = {
  openInsuranceBank, openInsuranceClient,
  openCreditBank, openCreditClient, close
}