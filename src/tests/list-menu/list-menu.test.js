import data from './list-menu-data.json'

const jsonData = JSON.stringify(data)
const title = JSON.stringify({ title: 'Выход' })

const setActive = (active) => window.trigger('list-menu.active', active)
const setTitle = () => window.trigger('list-menu.title', title)
const setData = () => window.trigger('list-menu.data', jsonData)

window.test.listMenu = { setActive, setTitle, setData }