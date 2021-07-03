import bankData   from './bank-data.json'
import clientData from './client-data.json'

const bankJson = JSON.stringify(bankData)
const clientJson = JSON.stringify(clientData)

const close = () => window.trigger('insurance-contract.close')
const openBank = () => window.trigger('insurance-contract.open.bank', bankJson)
const openClient = () =>
  window.trigger('insurance-contract.open.client', clientJson)

window.test.insuranceContract = { openBank, openClient, close }