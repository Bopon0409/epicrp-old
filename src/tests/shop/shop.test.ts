import data from './shop-data.json'

const jsonData: string = JSON.stringify(data)

const setActive = (active: boolean) => window.trigger('shop.active', active)
const setData = () => window.trigger('shop.data', jsonData)

window.test.shop = { setActive, setData }