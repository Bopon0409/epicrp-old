import data from './work.json'

const setActive = active => window.trigger('work.active', active)
const setData = () => window.trigger('work.data', JSON.stringify(data))

window.test.work = { setActive, setData }