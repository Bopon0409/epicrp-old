import data from './list-menu-data.json'

const jsonData = JSON.stringify(data)

const open = () => window.trigger('list-menu.open', jsonData)
const close = () => window.trigger('list-menu.close')

window.test.listMenu = { open, close }