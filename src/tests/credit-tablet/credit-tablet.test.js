import data from './credit-tablet-data.json'

const jsonData = JSON.stringify(data)

const open = () => window.trigger('credit-tablet.open', jsonData)
const close = () => window.trigger('credit-tablet.close')

window.test.creditTablet = { open, close }