import bankData   from './bank-insurance-data.json'
import clientData from './client-insurance-data.json'

const bankJson = JSON.stringify(bankData)
const clientJson = JSON.stringify(clientData)

const close = () => window.trigger('contract.close')
const openBank = () => window.trigger('contract.open.bank', bankJson)
const openClient = () =>
  window.trigger('contract.open.client', clientJson)

window.test.insuranceContract = { openBank, openClient, close }